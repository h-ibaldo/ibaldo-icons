import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookArrowDownCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookArrowDownCurved: ForwardRefExoticComponent<BookArrowDownCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookArrowDownCurved;
export { BookArrowDownCurved };
