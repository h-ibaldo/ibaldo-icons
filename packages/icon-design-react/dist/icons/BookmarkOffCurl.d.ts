import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkOffCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkOffCurl: ForwardRefExoticComponent<BookmarkOffCurlProps & RefAttributes<SVGSVGElement>>;

export default BookmarkOffCurl;
export { BookmarkOffCurl };
