import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkCurved: ForwardRefExoticComponent<BookBookmarkCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkCurved;
export { BookBookmarkCurved };
