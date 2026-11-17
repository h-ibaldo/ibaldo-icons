import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCheckCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCheckCorner: ForwardRefExoticComponent<BookmarkCheckCornerProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCheckCorner;
export { BookmarkCheckCorner };
