import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenFlat: ForwardRefExoticComponent<BookOpenFlatProps & RefAttributes<SVGSVGElement>>;

export default BookOpenFlat;
export { BookOpenFlat };
