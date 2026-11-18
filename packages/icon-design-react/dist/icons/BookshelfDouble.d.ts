import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookshelfDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookshelfDouble: ForwardRefExoticComponent<BookshelfDoubleProps & RefAttributes<SVGSVGElement>>;

export default BookshelfDouble;
export { BookshelfDouble };
