import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStriped: ForwardRefExoticComponent<BookmarkStripedProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStriped;
export { BookmarkStriped };
