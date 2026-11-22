import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookMinusCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookMinusCurved: ForwardRefExoticComponent<BookMinusCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookMinusCurved;
export { BookMinusCurved };
