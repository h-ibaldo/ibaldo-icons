import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBlock: ForwardRefExoticComponent<BookBlockProps & RefAttributes<SVGSVGElement>>;

export default BookBlock;
export { BookBlock };
