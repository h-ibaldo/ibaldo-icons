import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookInformation1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookInformation1: ForwardRefExoticComponent<BookInformation1Props & RefAttributes<SVGSVGElement>>;

export default BookInformation1;
export { BookInformation1 };
