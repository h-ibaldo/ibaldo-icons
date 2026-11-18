import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookLabelBlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookLabelBlock: ForwardRefExoticComponent<BookLabelBlockProps & RefAttributes<SVGSVGElement>>;

export default BookLabelBlock;
export { BookLabelBlock };
