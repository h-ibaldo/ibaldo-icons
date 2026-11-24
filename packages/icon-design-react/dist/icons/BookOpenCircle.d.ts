import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenCircle: ForwardRefExoticComponent<BookOpenCircleProps & RefAttributes<SVGSVGElement>>;

export default BookOpenCircle;
export { BookOpenCircle };
