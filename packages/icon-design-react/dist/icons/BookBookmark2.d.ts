import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmark2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmark2: ForwardRefExoticComponent<BookBookmark2Props & RefAttributes<SVGSVGElement>>;

export default BookBookmark2;
export { BookBookmark2 };
