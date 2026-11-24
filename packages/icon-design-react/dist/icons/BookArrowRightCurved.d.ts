import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookArrowRightCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookArrowRightCurved: ForwardRefExoticComponent<BookArrowRightCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookArrowRightCurved;
export { BookArrowRightCurved };
