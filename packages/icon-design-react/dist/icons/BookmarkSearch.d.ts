import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkSearch: ForwardRefExoticComponent<BookmarkSearchProps & RefAttributes<SVGSVGElement>>;

export default BookmarkSearch;
export { BookmarkSearch };
