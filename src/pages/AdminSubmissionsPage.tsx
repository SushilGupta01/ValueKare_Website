import { useState, useEffect } from 'react';
import { adminSubmissionsApi } from '../lib/adminApi';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { Search, User, Mail, Phone, MessageSquare, Eye, Send, Clock, CheckCircle, Archive } from 'lucide-react';

interface Submission {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  replyMessage?: string;
  createdAt: string;
}

const statusColors: Record<string, string> = {
  new: 'bg-yellow-100 text-yellow-800',
  read: 'bg-blue-100 text-blue-800',
  replied: 'bg-green-100 text-green-800',
  archived: 'bg-gray-100 text-gray-800',
};

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [replyData, setReplyData] = useState({ replyMessage: '' });

  useEffect(() => {
    fetchSubmissions();
  }, [statusFilter]);

  const fetchSubmissions = async () => {
    try {
      const params = statusFilter !== 'all' ? { status: statusFilter } : undefined;
      const data: Submission[] = await adminSubmissionsApi.getAll(params) as Submission[];
      setSubmissions(data);
    } catch (error) {
      toast.error('Failed to load submissions');
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewSubmission = async (submission: Submission) => {
    setSelectedSubmission(submission);
    setReplyData({ replyMessage: '' });
    setIsDetailDialogOpen(true);
    
    // Mark as read if new
    if (submission.status === 'new') {
      try {
        await adminSubmissionsApi.updateStatus(submission._id, 'read');
        fetchSubmissions();
      } catch (error) {
        console.error('Failed to mark as read');
      }
    }
  };

  const handleReply = async () => {
    if (!selectedSubmission || !replyData.replyMessage.trim()) {
      toast.error('Please enter a reply message');
      return;
    }
    
    try {
      await adminSubmissionsApi.reply(selectedSubmission._id, replyData.replyMessage);
      toast.success('Reply sent successfully');
      setIsDetailDialogOpen(false);
      fetchSubmissions();
    } catch (error) {
      toast.error('Failed to send reply');
    }
  };

  const handleUpdateStatus = async (status: string) => {
    if (!selectedSubmission) return;
    
    try {
      await adminSubmissionsApi.updateStatus(selectedSubmission._id, status);
      toast.success('Status updated');
      setIsDetailDialogOpen(false);
      fetchSubmissions();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    
    try {
      await adminSubmissionsApi.delete(id);
      toast.success('Submission deleted');
      fetchSubmissions();
    } catch (error) {
      toast.error('Failed to delete submission');
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="grid gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-28 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#0d1912]">Contact Messages</h1>
        <p className="text-gray-500 mt-1">Manage customer inquiries and messages</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search by name or email..."
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="read">Read</SelectItem>
            <SelectItem value="replied">Replied</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Submissions List */}
      <div className="grid gap-4">
        {submissions.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-gray-500">
              No messages found.
            </CardContent>
          </Card>
        ) : (
          submissions.map((submission) => (
            <Card key={submission._id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{submission.name}</h3>
                      <Badge className={statusColors[submission.status]}>
                        {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-[#8BC34A] font-medium mb-2">{submission.subject}</p>
                    <p className="text-gray-600 line-clamp-2 mb-3">{submission.message}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Mail size={14} /> {submission.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone size={14} /> {submission.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {new Date(submission.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewSubmission(submission)}
                      title="View Details"
                    >
                      <Eye size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(submission._id)}
                      title="Delete"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Archive size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Submission Detail Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-gray-500">Name</Label>
                  <p className="font-medium flex items-center gap-2">
                    <User size={16} /> {selectedSubmission.name}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Email</Label>
                  <p className="font-medium flex items-center gap-2">
                    <Mail size={16} /> {selectedSubmission.email}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Phone</Label>
                  <p className="font-medium flex items-center gap-2">
                    <Phone size={16} /> {selectedSubmission.phone}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Status</Label>
                  <Badge className={statusColors[selectedSubmission.status]}>
                    {selectedSubmission.status.charAt(0).toUpperCase() + selectedSubmission.status.slice(1)}
                  </Badge>
                </div>
              </div>

              {/* Subject & Message */}
              <div className="space-y-2">
                <Label className="text-gray-500">Subject</Label>
                <p className="font-medium text-lg">{selectedSubmission.subject}</p>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500">Message</Label>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>
              </div>

              {/* Previous Reply */}
              {selectedSubmission.replyMessage && (
                <div className="space-y-2">
                  <Label className="text-gray-500">Your Previous Reply</Label>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="whitespace-pre-wrap">{selectedSubmission.replyMessage}</p>
                  </div>
                </div>
              )}

              {/* Reply Form */}
              <div className="border-t pt-4 space-y-4">
                <h4 className="font-medium">Send Reply</h4>
                <div className="space-y-2">
                  <Label>Reply Message</Label>
                  <Textarea
                    value={replyData.replyMessage}
                    onChange={(e) => setReplyData({ replyMessage: e.target.value })}
                    placeholder="Type your reply..."
                    rows={4}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    className="bg-[#8BC34A] hover:bg-[#7cb342]" 
                    onClick={handleReply}
                    disabled={!replyData.replyMessage.trim()}
                  >
                    <Send size={16} className="mr-2" />
                    Send Reply
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleUpdateStatus('read')}
                  >
                    <CheckCircle size={16} className="mr-2" />
                    Mark as Read
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleUpdateStatus('archived')}
                  >
                    <Archive size={16} className="mr-2" />
                    Archive
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

