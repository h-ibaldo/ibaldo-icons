import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookAlertCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookAlertCurved: ForwardRefExoticComponent<BookAlertCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookAlertCurved;
export { BookAlertCurved };
