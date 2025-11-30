import Link from 'next/link';
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'group flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition',
  {
    variants: {
      variant: {
        primary: 'bg-gray-900 text-white hover:bg-gray-950',
        secondary: 'bg-white borderBlack',
      },
      size: {
        md: 'px-7 py-3',
        icon: 'p-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  download?: boolean;
  target?: string;
}

export default function Button({
  className,
  variant,
  size,
  children,
  href,
  download,
  target,
  ...props
}: ButtonProps) {
  const classes = twMerge(buttonVariants({ variant, size, className }));

  if (href) {
    const isInternal = href.startsWith('#') || href.startsWith('/');
    if (isInternal) {
      return (
        <Link
          href={href}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={target || '_blank'}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
