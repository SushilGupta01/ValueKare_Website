import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CSRInitiative } from '../components/CSRInitiative';

<<<<<<< HEAD
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
=======
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc2MzIwMzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Hospital Operations',
  },
  {
    src: 'https://images.unsplash.com/photo-1560549437-6fce5909aed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSRklEJTIwdGVjaG5vbG9neSUyMGludmVudG9yeXxlbnwxfHx8fDE3NjMyMDM5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'RFID Technology',
  },
  {
    src: 'https://images.unsplash.com/photo-1654703680115-4ab46aebebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc2MzIwMzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Manufacturing Industry',
  },
  {
    src: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2MzE2OTE1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Business Consulting',
  },
  {
    src: 'https://images.unsplash.com/photo-1584792323914-329ce9bf59db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHZpc2lvbnxlbnwxfHx8fDE3NjMyMDM5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'CSR Initiative - Vision Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1759862466272-e4953f8e5411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzMTk0NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Healthcare Facility',
  },
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
];

export function GalleryPage() {
  return (
    <div className="pt-20">
<<<<<<< HEAD

      {/* Header Section */}
=======
      {/* Page Header */}
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
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

<<<<<<< HEAD
      {/* Gallery Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

=======
      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
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
<<<<<<< HEAD

                {/* Hover title overlay */}
=======
>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-background">
                    <h3>{image.title}</h3>
                  </div>
                </div>
<<<<<<< HEAD

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CSR Section */}
=======
              </motion.div>
            ))}
          </div>
        </div>
      </section>

>>>>>>> cc46963472f36317b1c893aeb4ff8e4fc65a583c
      <CSRInitiative />
    </div>
  );
}
