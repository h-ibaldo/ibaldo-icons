import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCurl: ForwardRefExoticComponent<BookmarkCurlProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCurl;
export { BookmarkCurl };
