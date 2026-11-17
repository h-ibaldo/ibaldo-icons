import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStar3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStar3: ForwardRefExoticComponent<BookmarkStar3Props & RefAttributes<SVGSVGElement>>;

export default BookmarkStar3;
export { BookmarkStar3 };
