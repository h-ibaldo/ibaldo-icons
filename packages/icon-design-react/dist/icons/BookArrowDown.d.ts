import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookArrowDown: ForwardRefExoticComponent<BookArrowDownProps & RefAttributes<SVGSVGElement>>;

export default BookArrowDown;
export { BookArrowDown };
