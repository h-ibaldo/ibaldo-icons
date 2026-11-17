import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStar4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStar4: ForwardRefExoticComponent<BookmarkStar4Props & RefAttributes<SVGSVGElement>>;

export default BookmarkStar4;
export { BookmarkStar4 };
