import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`space-y-4 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${
          light 
            ? 'bg-primary-foreground/10 text-primary-foreground' 
            : 'bg-secondary/10 text-secondary'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${
        light ? 'text-primary-foreground' : 'text-foreground'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-primary-foreground/80' : 'text-muted-foreground'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`decorative-line ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
