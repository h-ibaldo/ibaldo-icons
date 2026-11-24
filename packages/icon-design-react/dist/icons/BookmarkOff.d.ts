import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkOff: ForwardRefExoticComponent<BookmarkOffProps & RefAttributes<SVGSVGElement>>;

export default BookmarkOff;
export { BookmarkOff };
