import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookMinus: ForwardRefExoticComponent<BookMinusProps & RefAttributes<SVGSVGElement>>;

export default BookMinus;
export { BookMinus };
