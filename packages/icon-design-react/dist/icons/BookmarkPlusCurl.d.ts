import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPlusCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPlusCurl: ForwardRefExoticComponent<BookmarkPlusCurlProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPlusCurl;
export { BookmarkPlusCurl };
