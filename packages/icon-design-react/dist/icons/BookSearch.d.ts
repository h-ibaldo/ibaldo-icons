import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookSearch: ForwardRefExoticComponent<BookSearchProps & RefAttributes<SVGSVGElement>>;

export default BookSearch;
export { BookSearch };
