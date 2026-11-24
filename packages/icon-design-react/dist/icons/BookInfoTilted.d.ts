import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookInfoTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookInfoTilted: ForwardRefExoticComponent<BookInfoTiltedProps & RefAttributes<SVGSVGElement>>;

export default BookInfoTilted;
export { BookInfoTilted };
