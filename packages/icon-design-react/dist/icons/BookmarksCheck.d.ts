import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarksCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarksCheck: ForwardRefExoticComponent<BookmarksCheckProps & RefAttributes<SVGSVGElement>>;

export default BookmarksCheck;
export { BookmarksCheck };
