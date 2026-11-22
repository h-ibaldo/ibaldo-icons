import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookSearchCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookSearchCurved: ForwardRefExoticComponent<BookSearchCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookSearchCurved;
export { BookSearchCurved };
