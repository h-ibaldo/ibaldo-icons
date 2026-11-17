import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCircleRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCircleRemove: ForwardRefExoticComponent<BookmarkCircleRemoveProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCircleRemove;
export { BookmarkCircleRemove };
