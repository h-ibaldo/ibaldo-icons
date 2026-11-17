import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkMinusCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkMinusCurl: ForwardRefExoticComponent<BookmarkMinusCurlProps & RefAttributes<SVGSVGElement>>;

export default BookmarkMinusCurl;
export { BookmarkMinusCurl };
