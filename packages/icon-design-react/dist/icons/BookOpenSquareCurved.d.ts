import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenSquareCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenSquareCurved: ForwardRefExoticComponent<BookOpenSquareCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookOpenSquareCurved;
export { BookOpenSquareCurved };
