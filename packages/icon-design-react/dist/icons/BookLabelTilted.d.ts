import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookLabelTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookLabelTilted: ForwardRefExoticComponent<BookLabelTiltedProps & RefAttributes<SVGSVGElement>>;

export default BookLabelTilted;
export { BookLabelTilted };
