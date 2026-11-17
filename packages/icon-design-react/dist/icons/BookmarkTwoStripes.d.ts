import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkTwoStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkTwoStripes: ForwardRefExoticComponent<BookmarkTwoStripesProps & RefAttributes<SVGSVGElement>>;

export default BookmarkTwoStripes;
export { BookmarkTwoStripes };
