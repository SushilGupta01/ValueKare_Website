import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CSRInitiative } from '../components/CSRInitiative';
import { Helmet } from 'react-helmet-async';

// Importing all updated gallery images
import img1 from '../assets/images/gallery/1.jpg';
import img3 from '../assets/images/gallery/3.jpg';
import img4 from '../assets/images/gallery/4.jpg';
import img5 from '../assets/images/gallery/5.jpg';
import img6 from '../assets/images/gallery/6.jpg';
import img7 from '../assets/images/gallery/7.jpg';

// Updated gallery data
const galleryImages = [
  { src: img3, title: '' },
  { src: img4, title: '' },
  { src: img5, title: '' },
  { src: img6, title: '' },
  { src: img7, title: '' },
  { src: img1, title: '' },
];

export function GalleryPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Work Gallery | Healthcare Projects & Implementations</title>
        <meta name="description" content="Explore our portfolio of healthcare projects, asset management implementations, RFID solutions, and successful medical facility transformations." />
        <meta property="og:title" content="Our Work Gallery | Healthcare Projects & Implementations" />
        <meta property="og:description" content="Explore our portfolio of healthcare projects, asset management implementations, RFID solutions, and successful medical facility transformations." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Work Gallery | Healthcare Projects & Implementations" />
        <meta name="twitter:description" content="Explore our portfolio of healthcare projects, asset management implementations, RFID solutions, and successful medical facility transformations." />
        <link rel="canonical" href="https://valuekare.in/gallery" />
      </Helmet>
  {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#0d1912] via-[#0f2418] to-[#0b1a12] py-16 overflow-hidden">
        {/* Ambient green glow (more controlled, more premium) */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#8BC34A]/18 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-[#8BC34A]/12 rounded-full blur-[160px]" />
        {/* Luxury grain texture */}
        <div className="absolute inset-0 opacity-[0.045] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0id2hpdGUiIC8+PC9zdmc+')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} >
            {/* Breadcrumb */}
            <div className="text-sm text-white/65 mb-3 tracking-wide">
              <a href="/" className="hover:text-white transition-colors duration-200">
                Home
              </a>
              <span className="mx-2 opacity-60">›</span>
              <span className="text-white font-medium">Gallery</span>
            </div>
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-3">
              Our Work
            </h1>
            {/* Accent line (more elegant) */}
            <div className="relative w-20 h-[3px] bg-[#8BC34A] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white/30 blur-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Hover title overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-background">
                    <h3>{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CSR Section */}
      <CSRInitiative />
    </div>
  );
}
