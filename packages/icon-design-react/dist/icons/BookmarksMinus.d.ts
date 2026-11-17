import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarksMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarksMinus: ForwardRefExoticComponent<BookmarksMinusProps & RefAttributes<SVGSVGElement>>;

export default BookmarksMinus;
export { BookmarksMinus };
