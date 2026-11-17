import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCheckCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCheckCurl: ForwardRefExoticComponent<BookmarkCheckCurlProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCheckCurl;
export { BookmarkCheckCurl };
