import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookKeyCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookKeyCurved: ForwardRefExoticComponent<BookKeyCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookKeyCurved;
export { BookKeyCurved };
