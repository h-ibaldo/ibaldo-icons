import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookX: ForwardRefExoticComponent<BookXProps & RefAttributes<SVGSVGElement>>;

export default BookX;
export { BookX };
