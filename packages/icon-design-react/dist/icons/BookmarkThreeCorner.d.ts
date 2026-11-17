import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkThreeCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkThreeCorner: ForwardRefExoticComponent<BookmarkThreeCornerProps & RefAttributes<SVGSVGElement>>;

export default BookmarkThreeCorner;
export { BookmarkThreeCorner };
