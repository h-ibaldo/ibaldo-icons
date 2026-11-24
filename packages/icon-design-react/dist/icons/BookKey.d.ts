import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookKeyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookKey: ForwardRefExoticComponent<BookKeyProps & RefAttributes<SVGSVGElement>>;

export default BookKey;
export { BookKey };
