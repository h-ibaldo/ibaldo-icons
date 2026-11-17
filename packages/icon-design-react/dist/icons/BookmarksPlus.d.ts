import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarksPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarksPlus: ForwardRefExoticComponent<BookmarksPlusProps & RefAttributes<SVGSVGElement>>;

export default BookmarksPlus;
export { BookmarksPlus };
