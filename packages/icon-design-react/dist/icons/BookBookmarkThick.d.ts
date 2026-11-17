import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkThick: ForwardRefExoticComponent<BookBookmarkThickProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkThick;
export { BookBookmarkThick };
