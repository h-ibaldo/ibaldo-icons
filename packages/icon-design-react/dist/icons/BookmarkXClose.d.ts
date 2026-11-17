import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkXCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkXClose: ForwardRefExoticComponent<BookmarkXCloseProps & RefAttributes<SVGSVGElement>>;

export default BookmarkXClose;
export { BookmarkXClose };
