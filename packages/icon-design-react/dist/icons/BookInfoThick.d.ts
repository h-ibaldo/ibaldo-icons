import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookInfoThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookInfoThick: ForwardRefExoticComponent<BookInfoThickProps & RefAttributes<SVGSVGElement>>;

export default BookInfoThick;
export { BookInfoThick };
