import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookStackTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookStackTilted: ForwardRefExoticComponent<BookStackTiltedProps & RefAttributes<SVGSVGElement>>;

export default BookStackTilted;
export { BookStackTilted };
