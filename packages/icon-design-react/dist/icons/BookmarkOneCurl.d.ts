import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkOneCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkOneCurl: ForwardRefExoticComponent<BookmarkOneCurlProps & RefAttributes<SVGSVGElement>>;

export default BookmarkOneCurl;
export { BookmarkOneCurl };
