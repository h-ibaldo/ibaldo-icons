import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookNoteCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookNoteCurved: ForwardRefExoticComponent<BookNoteCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookNoteCurved;
export { BookNoteCurved };
