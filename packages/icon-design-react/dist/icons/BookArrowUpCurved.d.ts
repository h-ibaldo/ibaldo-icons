import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookArrowUpCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookArrowUpCurved: ForwardRefExoticComponent<BookArrowUpCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookArrowUpCurved;
export { BookArrowUpCurved };
