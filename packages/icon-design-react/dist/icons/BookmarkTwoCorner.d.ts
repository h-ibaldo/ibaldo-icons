import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkTwoCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkTwoCorner: ForwardRefExoticComponent<BookmarkTwoCornerProps & RefAttributes<SVGSVGElement>>;

export default BookmarkTwoCorner;
export { BookmarkTwoCorner };
