import { useState, useEffect } from 'react';
import { adminApplicationsApi } from '../lib/adminApi';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { Search, User, Mail, Phone, Calendar, FileText, Eye, CheckCircle, XCircle, Clock, Download } from 'lucide-react';

interface Application {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  resumeUrl: string;
  coverLetter: string;
  portfolio?: string;
  status: 'pending' | 'review' | 'interview' | 'offer' | 'hired' | 'rejected';
  note?: string;
  interviewDate?: string;
  career?: {
    title: string;
    department: string;
  };
  createdAt: string;
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  review: 'bg-blue-100 text-blue-800',
  interview: 'bg-purple-100 text-purple-800',
  offer: 'bg-green-100 text-green-800',
  hired: 'bg-emerald-100 text-emerald-800',
  rejected: 'bg-red-100 text-red-800',
};

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);
  const [statusData, setStatusData] = useState({
    status: '',
    note: '',
    interviewDate: '',
  });

  useEffect(() => {
    fetchApplications();
  }, [statusFilter]);

  const fetchApplications = async () => {
    try {
      const params = statusFilter !== 'all' ? { status: statusFilter } : undefined;
      const data: Application[] = await adminApplicationsApi.getAll(params) as Application[];
      setApplications(data);
    } catch (error) {
      toast.error('Failed to load applications');
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewApplication = (application: Application) => {
    setSelectedApplication(application);
    setStatusData({
      status: application.status,
      note: application.note || '',
      interviewDate: application.interviewDate || '',
    });
    setIsDetailDialogOpen(true);
  };

  const handleUpdateStatus = async () => {
    if (!selectedApplication) return;
    
    try {
      await adminApplicationsApi.updateStatus(
        selectedApplication._id,
        statusData.status,
        statusData.note,
        statusData.interviewDate
      );
      toast.success('Application status updated');
      setIsStatusDialogOpen(false);
      fetchApplications();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleDownloadResume = (resumeUrl: string, fullName: string) => {
    window.open(resumeUrl, '_blank');
    toast.info('Opening resume...');
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
        <h1 className="text-3xl font-bold text-[#0d1912]">Job Applications</h1>
        <p className="text-gray-500 mt-1">Review and manage job applications</p>
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
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="review">Under Review</SelectItem>
            <SelectItem value="interview">Interview</SelectItem>
            <SelectItem value="offer">Offer</SelectItem>
            <SelectItem value="hired">Hired</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Applications List */}
      <div className="grid gap-4">
        {applications.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-gray-500">
              No applications found.
            </CardContent>
          </Card>
        ) : (
          applications.map((application) => (
            <Card key={application._id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{application.fullName}</h3>
                      <Badge className={statusColors[application.status]}>
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </Badge>
                    </div>
                    {application.career && (
                      <p className="text-[#8BC34A] font-medium mb-2">
                        Applied for: {application.career.title} ({application.career.department})
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Mail size={14} /> {application.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone size={14} /> {application.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {application.experience} years exp.
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {new Date(application.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadResume(application.resumeUrl, application.fullName)}
                    >
                      <Download size={16} className="mr-1" />
                      Resume
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewApplication(application)}
                      title="View Details"
                    >
                      <Eye size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Application Detail Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-6">
              {/* Applicant Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-gray-500">Full Name</Label>
                  <p className="font-medium">{selectedApplication.fullName}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Email</Label>
                  <p className="font-medium">{selectedApplication.email}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Phone</Label>
                  <p className="font-medium">{selectedApplication.phone}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Experience</Label>
                  <p className="font-medium">{selectedApplication.experience} years</p>
                </div>
                {selectedApplication.career && (
                  <div className="col-span-2 space-y-1">
                    <Label className="text-gray-500">Applied For</Label>
                    <p className="font-medium">
                      {selectedApplication.career.title} ({selectedApplication.career.department})
                    </p>
                  </div>
                )}
              </div>

              {/* Cover Letter */}
              {selectedApplication.coverLetter && (
                <div className="space-y-2">
                  <Label className="text-gray-500">Cover Letter</Label>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm whitespace-pre-wrap">{selectedApplication.coverLetter}</p>
                  </div>
                </div>
              )}

              {/* Portfolio */}
              {selectedApplication.portfolio && (
                <div className="space-y-2">
                  <Label className="text-gray-500">Portfolio</Label>
                  <a 
                    href={selectedApplication.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#8BC34A] hover:underline"
                  >
                    {selectedApplication.portfolio}
                  </a>
                </div>
              )}

              {/* Resume */}
              <div className="space-y-2">
                <Label className="text-gray-500">Resume</Label>
                <Button
                  variant="outline"
                  onClick={() => handleDownloadResume(selectedApplication.resumeUrl, selectedApplication.fullName)}
                >
                  <FileText size={16} className="mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Status Update */}
              <div className="border-t pt-4 space-y-4">
                <h4 className="font-medium">Update Status</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select 
                      value={statusData.status} 
                      onValueChange={(value) => setStatusData({ ...statusData, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="review">Under Review</SelectItem>
                        <SelectItem value="interview">Interview</SelectItem>
                        <SelectItem value="offer">Offer</SelectItem>
                        <SelectItem value="hired">Hired</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {statusData.status === 'interview' && (
                    <div className="space-y-2">
                      <Label>Interview Date</Label>
                      <Input
                        type="datetime-local"
                        value={statusData.interviewDate}
                        onChange={(e) => setStatusData({ ...statusData, interviewDate: e.target.value })}
                      />
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Internal Note</Label>
                  <Textarea
                    value={statusData.note}
                    onChange={(e) => setStatusData({ ...statusData, note: e.target.value })}
                    placeholder="Add internal notes..."
                    rows={3}
                  />
                </div>
                <Button 
                  className="bg-[#8BC34A] hover:bg-[#7cb342]" 
                  onClick={handleUpdateStatus}
                >
                  Update Status
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

