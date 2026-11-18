import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookLabelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookLabel: ForwardRefExoticComponent<BookLabelProps & RefAttributes<SVGSVGElement>>;

export default BookLabel;
export { BookLabel };
