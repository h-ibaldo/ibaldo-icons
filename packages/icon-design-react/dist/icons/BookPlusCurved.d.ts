import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookPlusCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookPlusCurved: ForwardRefExoticComponent<BookPlusCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookPlusCurved;
export { BookPlusCurved };
