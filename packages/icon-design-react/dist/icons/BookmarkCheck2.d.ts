import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCheck2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCheck2: ForwardRefExoticComponent<BookmarkCheck2Props & RefAttributes<SVGSVGElement>>;

export default BookmarkCheck2;
export { BookmarkCheck2 };
