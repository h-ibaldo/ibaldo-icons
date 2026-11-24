import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackCheck: ForwardRefExoticComponent<BookmarkStackCheckProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackCheck;
export { BookmarkStackCheck };
