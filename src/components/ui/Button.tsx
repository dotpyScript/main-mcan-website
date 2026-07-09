import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'solid' | 'outline';
type ButtonTone = 'onLight' | 'onDark';

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'h-10 min-w-28 gap-1.5 px-4 text-[13px]',
  md: 'h-11 min-w-32 gap-1.5 px-5 text-sm',
  lg: 'h-14 min-w-40 gap-2 px-7 text-[15px]',
};

const ICON_SIZE: Record<ButtonSize, string> = {
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-4',
};

const VARIANT_STYLES: Record<ButtonTone, Record<ButtonVariant, string>> = {
  onDark: {
    solid: 'bg-paper text-forest-night hover:bg-gold-soft',
    outline:
      'border border-white/30 bg-white/5 text-paper backdrop-blur-sm hover:bg-white/15',
  },
  onLight: {
    solid: 'bg-forest-night text-paper hover:bg-forest',
    outline:
      'border border-line-strong text-ink hover:border-forest/40 hover:text-forest',
  },
};

type BaseProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  icon?: LucideIcon;
  trailingIcon?: LucideIcon;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  > & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'className' | 'children' | 'href'
  > & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = ({
  size = 'lg',
  variant = 'solid',
  tone = 'onLight',
  icon: Icon,
  trailingIcon: TrailingIcon,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const classes = cn(
    'group inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors',
    SIZE_STYLES[size],
    VARIANT_STYLES[tone][variant],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      {Icon && <Icon className={ICON_SIZE[size]} />}
      {children}
      {TrailingIcon && (
        <TrailingIcon
          className={cn(
            ICON_SIZE[size],
            'transition-transform group-hover:translate-x-0.5',
          )}
        />
      )}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, external, download, ...anchorRest } = rest as ButtonAsAnchor;

    if (external) {
      return (
        <a
          href={href}
          download={download}
          target={download ? undefined : '_blank'}
          rel="noopener noreferrer"
          className={classes}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {content}
    </button>
  );
};

export default Button;
