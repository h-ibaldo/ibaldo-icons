import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookArrowRight: ForwardRefExoticComponent<BookArrowRightProps & RefAttributes<SVGSVGElement>>;

export default BookArrowRight;
export { BookArrowRight };
