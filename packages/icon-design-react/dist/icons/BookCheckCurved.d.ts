import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookCheckCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookCheckCurved: ForwardRefExoticComponent<BookCheckCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookCheckCurved;
export { BookCheckCurved };
