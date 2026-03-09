import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { PatientEMRPage } from './pages/PatientEMRPage';
import { FixedAssetPage } from './pages/FixedAssetPage';
import { InternationalMedicalTourismPage } from './pages/InternationalMedicalTourismPage';
import { CareersPage } from './pages/CareersPage';
import { BlogsPage } from './pages/BlogsPage';
import { GoToTop } from "./components/GoToTop";
import { HelmetProvider } from 'react-helmet-async';

// Admin Pages
import { AdminLayout } from './components/AdminLayout';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminBlogsPage from './pages/AdminBlogsPage';
import AdminCareersPage from './pages/AdminCareersPage';
import AdminApplicationsPage from './pages/AdminApplicationsPage';
import AdminSubmissionsPage from './pages/AdminSubmissionsPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <HomePage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <main>
                  <AboutPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <main>
                  <ServicesPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Navbar />
                <main>
                  <GalleryPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/clients"
            element={
              <>
                <Navbar />
                <main>
                  <ClientsPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <main>
                  <ContactPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/patient-emr"
            element={
              <>
                <Navbar />
                <main>
                  <PatientEMRPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/fixed-asset-inventory"
            element={
              <>
                <Navbar />
                <main>
                  <FixedAssetPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/medical-tourism"
            element={
              <>
                <Navbar />
                <main>
                  <InternationalMedicalTourismPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Navbar />
                <main>
                  <CareersPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/blogs"
            element={
              <>
                <Navbar />
                <main>
                  <BlogsPage />
                </main>
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="blogs" element={<AdminBlogsPage />} />
            <Route path="careers" element={<AdminCareersPage />} />
            <Route path="applications" element={<AdminApplicationsPage />} />
            <Route path="submissions" element={<AdminSubmissionsPage />} />
          </Route>
        </Routes>
        <GoToTop />
        <Toaster />
      </BrowserRouter>
    </HelmetProvider>
  );
}

