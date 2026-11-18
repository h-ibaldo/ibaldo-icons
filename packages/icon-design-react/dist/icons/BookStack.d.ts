import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookStack: ForwardRefExoticComponent<BookStackProps & RefAttributes<SVGSVGElement>>;

export default BookStack;
export { BookStack };
