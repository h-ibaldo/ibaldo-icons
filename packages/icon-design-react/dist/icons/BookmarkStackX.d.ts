import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackX: ForwardRefExoticComponent<BookmarkStackXProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackX;
export { BookmarkStackX };
