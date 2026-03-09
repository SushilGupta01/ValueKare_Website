import { useState, useEffect } from 'react';
import { dashboardApi } from '../lib/adminApi';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { 
  FileText, 
  Briefcase, 
  Users, 
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

interface Stats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  totalCareers: number;
  activeCareers: number;
  totalApplications: number;
  pendingApplications: number;
  newSubmissions: number;
  totalSubmissions: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const blogStats: any = await dashboardApi.getStats().catch(() => ({}));
      const careerStats: any = { totalCareers: 0, activeCareers: 0 };
      const appStats: any = await dashboardApi.getApplicationStats().catch(() => ({}));
      const contactStats: any = await dashboardApi.getContactStats().catch(() => ({}));

      setStats({
        totalBlogs: blogStats.totalBlogs || 0,
        publishedBlogs: blogStats.publishedBlogs || 0,
        draftBlogs: blogStats.draftBlogs || 0,
        totalCareers: careerStats.totalCareers || 0,
        activeCareers: careerStats.activeCareers || 0,
        totalApplications: appStats.totalApplications || 0,
        pendingApplications: appStats.pendingApplications || 0,
        newSubmissions: contactStats.newSubmissions || 0,
        totalSubmissions: contactStats.totalSubmissions || 0,
      });
    } catch (error) {
      toast.error('Failed to load statistics');
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Blogs',
      value: stats?.totalBlogs || 0,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      details: `${stats?.publishedBlogs || 0} published, ${stats?.draftBlogs || 0} drafts`
    },
    {
      title: 'Active Careers',
      value: stats?.activeCareers || 0,
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      details: `${stats?.totalCareers || 0} total positions`
    },
    {
      title: 'Job Applications',
      value: stats?.totalApplications || 0,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      details: `${stats?.pendingApplications || 0} pending review`
    },
    {
      title: 'Contact Messages',
      value: stats?.totalSubmissions || 0,
      icon: MessageSquare,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      details: `${stats?.newSubmissions || 0} unread`
    },
  ];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-[#0d1912]">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="pt-6">
                <div className="h-20 bg-gray-200 rounded-lg" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#0d1912]">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of your content and submissions</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.details}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={stat.color} size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-[#8BC34A]" size={20} />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <a href="/admin/blogs" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="text-blue-600 mb-2" size={24} />
              <p className="font-medium">Manage Blogs</p>
              <p className="text-sm text-gray-500">Create and edit blog posts</p>
            </a>
            <a href="/admin/careers" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Briefcase className="text-green-600 mb-2" size={24} />
              <p className="font-medium">Manage Careers</p>
              <p className="text-sm text-gray-500">Add new job positions</p>
            </a>
            <a href="/admin/applications" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Users className="text-purple-600 mb-2" size={24} />
              <p className="font-medium">View Applications</p>
              <p className="text-sm text-gray-500">Review candidate submissions</p>
            </a>
            <a href="/admin/submissions" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <MessageSquare className="text-orange-600 mb-2" size={24} />
              <p className="font-medium">Contact Messages</p>
              <p className="text-sm text-gray-500">Respond to inquiries</p>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="text-[#8BC34A]" size={20} />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="text-green-600" size={20} />
                <div>
                  <p className="text-sm font-medium">System is running</p>
                  <p className="text-xs text-gray-500">All services operational</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <AlertCircle className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm font-medium">Admin Panel Active</p>
                  <p className="text-xs text-gray-500">Ready to manage content</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

