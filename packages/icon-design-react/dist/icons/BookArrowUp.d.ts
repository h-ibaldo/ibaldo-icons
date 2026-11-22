import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookArrowUp: ForwardRefExoticComponent<BookArrowUpProps & RefAttributes<SVGSVGElement>>;

export default BookArrowUp;
export { BookArrowUp };
