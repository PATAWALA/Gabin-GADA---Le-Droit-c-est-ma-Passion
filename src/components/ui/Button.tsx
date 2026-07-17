import Link from 'next/link';

type Props = {
  href?: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ href, variant = 'primary', children, className = '', icon, onClick }: Props) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all shadow-sm';

  const variants = {
    primary: 'bg-blue-royal text-white hover:bg-blue-dark px-6 py-3',
    outline: 'border border-blue-royal text-blue-royal hover:bg-blue-royal hover:text-white px-6 py-3',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}