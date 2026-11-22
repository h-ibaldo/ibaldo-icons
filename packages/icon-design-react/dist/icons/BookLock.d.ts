import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookLock: ForwardRefExoticComponent<BookLockProps & RefAttributes<SVGSVGElement>>;

export default BookLock;
export { BookLock };
