import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookInformation3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookInformation3: ForwardRefExoticComponent<BookInformation3Props & RefAttributes<SVGSVGElement>>;

export default BookInformation3;
export { BookInformation3 };
