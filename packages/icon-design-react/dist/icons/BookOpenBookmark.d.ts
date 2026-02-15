import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenBookmarkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenBookmark: ForwardRefExoticComponent<BookOpenBookmarkProps & RefAttributes<SVGSVGElement>>;

export default BookOpenBookmark;
export { BookOpenBookmark };
