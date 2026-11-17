import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPlusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPlusCorner: ForwardRefExoticComponent<BookmarkPlusCornerProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPlusCorner;
export { BookmarkPlusCorner };
