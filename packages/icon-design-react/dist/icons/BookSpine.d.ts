import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookSpineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookSpine: ForwardRefExoticComponent<BookSpineProps & RefAttributes<SVGSVGElement>>;

export default BookSpine;
export { BookSpine };
