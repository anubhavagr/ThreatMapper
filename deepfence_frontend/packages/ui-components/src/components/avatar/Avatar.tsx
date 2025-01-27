import { forwardRef } from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineUser } from 'react-icons/hi';
import { cn } from 'tailwind-preset';

type AvatarType = {
  alt?: string;
  src?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const DefaultIcon = () => (
  <IconContext.Provider
    value={{
      className: 'w-6 h-6',
    }}
  >
    <HiOutlineUser />
  </IconContext.Provider>
);

export const Avatar = forwardRef<HTMLButtonElement, AvatarType>(
  ({ children = <DefaultIcon />, src = '', alt = '', className = '', onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          `inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600`,
          `text-gray-700 dark:text-gray-100 text-lg`,
          'outline-none focus-visible:ring-1 focus-visible:ring-gray-900 dark:focus-visible:ring-2 dark:focus-visible:ring-gray-400',
          className,
        )}
      >
        {!src || src.trim().length === 0 ? (
          <>{children}</>
        ) : (
          <img src={src} alt={alt} className="p-2" />
        )}
      </button>
    );
  },
);
