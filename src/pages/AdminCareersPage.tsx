import { useState, useEffect } from 'react';
import { adminCareersApi } from '../lib/adminApi';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { Plus, Edit, Trash2, Search, MapPin, Briefcase, Calendar, Users } from 'lucide-react';

interface Career {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  slug: string;
  salary?: string;
  experience?: string;
  isActive: boolean;
  createdAt: string;
}

export default function AdminCareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCareer, setEditingCareer] = useState<Career | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'full-time',
    description: '',
    responsibilities: '',
    requirements: '',
    benefits: '',
    salary: '',
    experience: '',
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const data = await adminCareersApi.getAll();
      setCareers(data);
    } catch (error) {
      toast.error('Failed to load careers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('department', formData.department);
    data.append('location', formData.location);
    data.append('type', formData.type);
    data.append('description', formData.description);
    data.append('responsibilities', JSON.stringify(formData.responsibilities.split('\n').filter(r => r.trim())));
    data.append('requirements', JSON.stringify(formData.requirements.split('\n').filter(r => r.trim())));
    data.append('benefits', JSON.stringify(formData.benefits.split('\n').filter(b => b.trim())));
    data.append('salary', formData.salary);
    data.append('experience', formData.experience);

    try {
      if (editingCareer) {
        await adminCareersApi.update(editingCareer._id, data);
        toast.success('Career position updated successfully');
      } else {
        await adminCareersApi.create(data);
        toast.success('Career position created successfully');
      }
      setIsDialogOpen(false);
      resetForm();
      fetchCareers();
    } catch (error: any) {
      toast.error(error.message || 'Failed to save career');
    }
  };

  const handleToggleStatus = async (career: Career) => {
    try {
      await adminCareersApi.toggleStatus(career._id);
      toast.success(career.isActive ? 'Position deactivated' : 'Position activated');
      fetchCareers();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this career position?')) return;
    
    try {
      await adminCareersApi.delete(id);
      toast.success('Career position deleted successfully');
      fetchCareers();
    } catch (error) {
      toast.error('Failed to delete career');
    }
  };

  const handleEdit = (career: Career) => {
    setEditingCareer(career);
    setFormData({
      title: career.title,
      department: career.department,
      location: career.location,
      type: career.type,
      description: career.description,
      responsibilities: career.responsibilities.join('\n'),
      requirements: career.requirements.join('\n'),
      benefits: career.benefits.join('\n'),
      salary: career.salary || '',
      experience: career.experience || '',
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setEditingCareer(null);
    setFormData({
      title: '',
      department: '',
      location: '',
      type: 'full-time',
      description: '',
      responsibilities: '',
      requirements: '',
      benefits: '',
      salary: '',
      experience: '',
    });
  };

  const filteredCareers = careers.filter(career =>
    career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    career.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="grid gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0d1912]">Career Management</h1>
          <p className="text-gray-500 mt-1">Manage job positions and openings</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="bg-[#8BC34A] hover:bg-[#7cb342]">
              <Plus size={18} className="mr-2" />
              Add Position
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingCareer ? 'Edit Position' : 'Create New Position'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Employment Type</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Range</Label>
                  <Input
                    id="salary"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    placeholder="e.g., ₹5-8 LPA"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="e.g., 3-5 years"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="responsibilities">Responsibilities (one per line)</Label>
                <Textarea
                  id="responsibilities"
                  value={formData.responsibilities}
                  onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                  rows={4}
                  placeholder="Lead team projects&#10;Mentor junior members&#10;Report to management"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements (one per line)</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  rows={4}
                  placeholder="Bachelor's degree&#10;5+ years experience&#10;Strong communication skills"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="benefits">Benefits (one per line)</Label>
                <Textarea
                  id="benefits"
                  value={formData.benefits}
                  onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                  rows={3}
                  placeholder="Health insurance&#10;Paid time off&#10;Professional development"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#8BC34A] hover:bg-[#7cb342]">
                  {editingCareer ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search positions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Careers List */}
      <div className="grid gap-4">
        {filteredCareers.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-gray-500">
              No career positions found. Create your first job opening!
            </CardContent>
          </Card>
        ) : (
          filteredCareers.map((career) => (
            <Card key={career._id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{career.title}</h3>
                      <Badge variant={career.isActive ? 'default' : 'secondary'}>
                        {career.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} /> {career.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {career.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {career.type}
                      </span>
                      {career.salary && (
                        <span className="flex items-center gap-1">
                          <Users size={14} /> {career.salary}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 line-clamp-2">{career.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleStatus(career)}
                      title={career.isActive ? 'Deactivate' : 'Activate'}
                    >
                      {career.isActive ? (
                        <span className="text-red-500">●</span>
                      ) : (
                        <span className="text-green-500">●</span>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(career)}
                      title="Edit"
                    >
                      <Edit size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(career._id)}
                      title="Delete"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

