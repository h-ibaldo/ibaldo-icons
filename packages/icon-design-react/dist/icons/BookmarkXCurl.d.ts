import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkXCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkXCurl: ForwardRefExoticComponent<BookmarkXCurlProps & RefAttributes<SVGSVGElement>>;

export default BookmarkXCurl;
export { BookmarkXCurl };
