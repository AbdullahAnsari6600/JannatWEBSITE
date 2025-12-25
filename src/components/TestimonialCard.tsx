import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  tour: string;
}

export const TestimonialCard = ({
  name,
  location,
  image,
  rating,
  text,
  tour,
}: TestimonialCardProps) => {
  return (
    <motion.div
      className="glass-card-strong p-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/20" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-gold fill-gold' : 'text-border'}`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-foreground leading-relaxed mb-6">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
        />
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
          <p className="text-xs text-secondary mt-1">{tour}</p>
        </div>
      </div>
    </motion.div>
  );
};
