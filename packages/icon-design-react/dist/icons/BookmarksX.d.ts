import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarksXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarksX: ForwardRefExoticComponent<BookmarksXProps & RefAttributes<SVGSVGElement>>;

export default BookmarksX;
export { BookmarksX };
