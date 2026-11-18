import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookLabelCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookLabelCurved: ForwardRefExoticComponent<BookLabelCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookLabelCurved;
export { BookLabelCurved };
