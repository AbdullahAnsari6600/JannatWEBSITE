// import { motion } from 'framer-motion';
// import { Star, MapPin, Clock, Users } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface PackageCardProps {
//   image: string;
//   title: string;
//   location: string;
//   duration: string;
//   rating: number;
//   price?: string;
//   type: 'hajj' | 'umrah' | 'ziyarat' | 'local' | 'international';
//   featured?: boolean;
// }

// export const PackageCard = ({
//   image,
//   title,
//   location,
//   duration,
//   rating,
//   price,
//   type,
//   featured = false,
// }: PackageCardProps) => {
//   const typeColors = {
//     hajj: 'bg-primary',
//     umrah: 'bg-secondary',
//     ziyarat: 'bg-gold',
//     local: 'bg-deep-blue-light',
//     international: 'bg-sky-blue',
//   };

//   const typeLabels = {
//     hajj: 'Hajj',
//     umrah: 'Umrah',
//     ziyarat: 'Ziyarat',
//     local: 'Local Tour',
//     international: 'International',
//   };

//   return (
//     <motion.div
//   className={`premium-card group flex flex-col h-full ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
//   whileHover={{ y: -8 }}
//   transition={{ duration: 0.3 }}
// >
//   <Link to={`/packages/${title.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col h-full">
//     {/* Image Container */}
//     <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-56'} flex-shrink-0`}>
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
//       <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${typeColors[type]}`}>
//         {typeLabels[type]}
//       </span>
//       <div className="absolute top-4 right-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
//         <Star className="w-4 h-4 text-gold fill-gold" />
//         <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
//       </div>
//     </div>

//     {/* Content */}
//     <div className="p-5 flex-1 flex flex-col justify-between">
//       <div>
//         <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
//           {title}
//         </h3>

//         <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
//           <span className="flex items-center gap-1">
//             <MapPin className="w-4 h-4" />
//             {location}
//           </span>
//           <span className="flex items-center gap-1">
//             <Clock className="w-4 h-4" />
//             {duration}
//           </span>
//         </div>
//       </div>

//       {price && (
//         <div className="pt-3 border-t border-border flex items-center justify-between mt-4">
//           <div>
//             <p className="text-xs text-muted-foreground">Starting from</p>
//             <p className="text-xl font-bold text-primary">{price}</p>
//           </div>
//           <span className="btn-primary text-sm py-2 px-4">
//             View Details
//           </span>
//         </div>
//       )}
//     </div>
//   </Link>
// </motion.div>

//   );
// };


// import { motion } from 'framer-motion';
// import { Star, MapPin, Clock } from 'lucide-react';

// interface PackageCardProps {
//   image: string;
//   title: string;
//   location: string;
//   duration: string;
//   rating: number;
//   price?: string;
//   type: 'hajj' | 'umrah' | 'ziyarat' | 'local';
//   onViewDetails?: () => void;
// }

// export const PackageCard = ({
//   image,
//   title,
//   location,
//   duration,
//   rating,
//   price,
//   type,
//   onViewDetails,
// }: PackageCardProps) => {
//   const typeColors = {
//     hajj: 'bg-primary',
//     umrah: 'bg-secondary',
//     ziyarat: 'bg-gold',
//     local: 'bg-deep-blue-light',
//     international: 'bg-sky-blue',
//   };

//   const typeLabels = {
//     hajj: 'Hajj',
//     umrah: 'Umrah',
//     ziyarat: 'Ziyarat',
//     local: 'Local Tour',
//   };

//   return (
//     <motion.div
//       className="premium-card group flex flex-col h-full bg-card/10 backdrop-blur-lg rounded-3xl shadow-glass-lg hover:shadow-glow transition-all duration-500"
//       whileHover={{ y: -6 }}
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden h-56 flex-shrink-0">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

//         {/* Type Badge */}
//         <span
//           className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${typeColors[type]}`}
//         >
//           {typeLabels[type]}
//         </span>

//         {/* Rating */}
//         <div className="absolute top-4 right-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
//           <Star className="w-4 h-4 text-gold fill-gold" />
//           <span className="text-sm font-semibold text-foreground">
//             {rating.toFixed(1)}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5 flex-1 flex flex-col justify-between">
//         <div>
//           <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
//             {title}
//           </h3>

//           <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
//             <span className="flex items-center gap-1">
//               <MapPin className="w-4 h-4" />
//               {location}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock className="w-4 h-4" />
//               {duration}
//             </span>
//           </div>
//         </div>

//         {price && (
//   <div className="pt-3 border-t border-border flex items-center justify-between mt-4">
//     <div>
//       <p className="text-xs text-muted-foreground">Starting from</p>
//       <p className="text-xl font-bold text-primary">{price}</p>
//     </div>
//   </div>
// )}

// {/* View Details button */}
// <button
//   onClick={onViewDetails}
//   className="mt-3 w-full py-2 bg-primary text-white rounded-xl hover:bg-secondary transition"
// >
//   View Details
// </button>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };


import { motion } from 'framer-motion';
import { Star, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PackageCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  price?: string;
  type: 'hajj' | 'umrah' | 'ziyarat' | 'local';
  onViewDetails?: () => void;
}

export const PackageCard = ({
  image,
  title,
  location,
  duration,
  rating,
  price,
  type,
  onViewDetails,
}: PackageCardProps) => {
  const { t } = useLanguage();
  
  const typeColors = {
    hajj: 'bg-primary',
    umrah: 'bg-secondary',
    ziyarat: 'bg-gold',
    local: 'bg-deep-blue-light',
    international: 'bg-sky-blue',
  };

  const typeLabels = {
    hajj: t.packageTypes.hajj,
    umrah: t.packageTypes.umrah,
    ziyarat: t.packageTypes.ziyarat,
    local: t.packageTypes.local,
  };

  return (
    <motion.div
      className="premium-card group flex flex-col h-full bg-card/10 backdrop-blur-lg rounded-3xl shadow-glass-lg hover:shadow-glow transition-all duration-500"
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

        {/* Type Badge */}
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${typeColors[type]}`}
        >
          {typeLabels[type]}
        </span>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star className="w-4 h-4 text-gold fill-gold" />
          <span className="text-sm font-semibold text-foreground">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </span>
          </div>
        </div>

        {/* Optional Price */}
        {price && (
          <div className="pt-3 border-t border-border flex items-center justify-between mt-4">
            <div>
              <p className="text-xs text-muted-foreground">{t.common.startingFrom}</p>
              <p className="text-xl font-bold text-primary">{price}</p>
            </div>
          </div>
        )}

        {/* View Details button */}
        <button
          onClick={onViewDetails}
          className="mt-3 w-full py-2 bg-primary text-white rounded-xl hover:bg-secondary transition"
        >
          {t.common.viewDetails}
        </button>
      </div>
    </motion.div>
  );
};
