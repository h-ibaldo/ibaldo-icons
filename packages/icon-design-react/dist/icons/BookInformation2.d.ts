import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookInformation2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookInformation2: ForwardRefExoticComponent<BookInformation2Props & RefAttributes<SVGSVGElement>>;

export default BookInformation2;
export { BookInformation2 };
