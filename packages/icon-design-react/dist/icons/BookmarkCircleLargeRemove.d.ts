import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCircleLargeRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCircleLargeRemove: ForwardRefExoticComponent<BookmarkCircleLargeRemoveProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCircleLargeRemove;
export { BookmarkCircleLargeRemove };
