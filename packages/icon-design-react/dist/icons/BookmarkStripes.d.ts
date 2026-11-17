import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStripes: ForwardRefExoticComponent<BookmarkStripesProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStripes;
export { BookmarkStripes };
