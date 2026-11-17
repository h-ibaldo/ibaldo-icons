import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkDotted: ForwardRefExoticComponent<BookmarkDottedProps & RefAttributes<SVGSVGElement>>;

export default BookmarkDotted;
export { BookmarkDotted };
