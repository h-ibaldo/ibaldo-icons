import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPage2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPage2: ForwardRefExoticComponent<BookmarkPage2Props & RefAttributes<SVGSVGElement>>;

export default BookmarkPage2;
export { BookmarkPage2 };
