import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStarLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStarLarge: ForwardRefExoticComponent<BookmarkStarLargeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStarLarge;
export { BookmarkStarLarge };
