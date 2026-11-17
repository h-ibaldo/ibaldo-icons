import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkX: ForwardRefExoticComponent<BookmarkXProps & RefAttributes<SVGSVGElement>>;

export default BookmarkX;
export { BookmarkX };
