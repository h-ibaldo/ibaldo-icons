import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenSquare: ForwardRefExoticComponent<BookOpenSquareProps & RefAttributes<SVGSVGElement>>;

export default BookOpenSquare;
export { BookOpenSquare };
