import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookInformation4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookInformation4: ForwardRefExoticComponent<BookInformation4Props & RefAttributes<SVGSVGElement>>;

export default BookInformation4;
export { BookInformation4 };
