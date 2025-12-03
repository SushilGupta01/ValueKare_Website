import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
<<<<<<< HEAD

=======
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
<<<<<<< HEAD

=======
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
import { PatientEMRPage } from './pages/PatientEMRPage';
import { FixedAssetPage } from './pages/FixedAssetPage';
import { InternationalMedicalTourismPage } from './pages/InternationalMedicalTourismPage';

<<<<<<< HEAD
/* ---------------- NEW PAGES YOU ADDED ---------------- */
import { CareersPage } from './pages/CareersPage';
import { BlogsPage } from './pages/BlogsPage';
/* ------------------------------------------------------ */

=======
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
<<<<<<< HEAD
        return <HomePage onNavigate={setCurrentPage} />;

      case 'about':
        return <AboutPage />;

      case 'services':
        return <ServicesPage />;

      case 'gallery':
        return <GalleryPage />;

      case 'clients':
        return <ClientsPage />;

      case 'contact':
        return <ContactPage />;

      case 'patient-emr':
        return <PatientEMRPage onNavigate={setCurrentPage} />;

      case 'fixed-asset-inventory':
        return <FixedAssetPage onNavigate={setCurrentPage} />;

      case 'medical-tourism':
        return <InternationalMedicalTourismPage onNavigate={setCurrentPage} />;

      /* ------- NEW ROUTES FOR CAREERS + BLOGS ------- */
      case 'careers':
        return <CareersPage />;

      case 'blogs':
        return <BlogsPage />;
      /* ----------------------------------------------- */

      default:
        return <HomePage onNavigate={setCurrentPage} />;
=======
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'clients':
        return <ClientsPage />;
      case 'contact':
        return <ContactPage />;
      case 'patient-emr':
        return <PatientEMRPage onNavigate={setCurrentPage} />;
      case 'fixed-asset-inventory':
        return <FixedAssetPage onNavigate={setCurrentPage} />;
      case 'medical-tourism':
        return <InternationalMedicalTourismPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage />;
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
<<<<<<< HEAD

      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />

      <Toaster />
    </div>
  );
}
=======
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster />
    </div>
  );
}
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
