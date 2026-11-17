import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenCurved: ForwardRefExoticComponent<BookOpenCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookOpenCurved;
export { BookOpenCurved };
