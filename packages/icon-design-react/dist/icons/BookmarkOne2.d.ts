import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkOne2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkOne2: ForwardRefExoticComponent<BookmarkOne2Props & RefAttributes<SVGSVGElement>>;

export default BookmarkOne2;
export { BookmarkOne2 };
