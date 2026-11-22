import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookArrowLeftCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookArrowLeftCurved: ForwardRefExoticComponent<BookArrowLeftCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookArrowLeftCurved;
export { BookArrowLeftCurved };
