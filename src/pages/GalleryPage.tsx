import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CSRInitiative } from '../components/CSRInitiative';

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
  {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm mb-4 opacity-90">
              <a href="/" className="hover:underline">Home</a> → Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl">Gallery</h1>
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
