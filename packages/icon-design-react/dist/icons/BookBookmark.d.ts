import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmark: ForwardRefExoticComponent<BookBookmarkProps & RefAttributes<SVGSVGElement>>;

export default BookBookmark;
export { BookBookmark };
