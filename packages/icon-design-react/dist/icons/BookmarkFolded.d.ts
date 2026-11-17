import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkFoldedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkFolded: ForwardRefExoticComponent<BookmarkFoldedProps & RefAttributes<SVGSVGElement>>;

export default BookmarkFolded;
export { BookmarkFolded };
