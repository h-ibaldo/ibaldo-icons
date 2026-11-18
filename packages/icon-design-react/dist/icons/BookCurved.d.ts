import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookCurved: ForwardRefExoticComponent<BookCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookCurved;
export { BookCurved };
