import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookCurl: ForwardRefExoticComponent<BookCurlProps & RefAttributes<SVGSVGElement>>;

export default BookCurl;
export { BookCurl };
