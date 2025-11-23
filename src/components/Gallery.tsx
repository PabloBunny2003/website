import { Section } from './Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2948&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <Section id="galeria" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">Galería Institucional</h2>
          <p className="text-gray-600 dark:text-gray-400">Momentos que definen nuestra labor.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full pb-12"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl shadow-md aspect-[4/3] group border border-gray-100 dark:border-gray-700">
                <img 
                  src={src} 
                  alt={`Galería JPCT ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
