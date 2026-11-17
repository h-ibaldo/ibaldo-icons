import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCheck1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCheck1: ForwardRefExoticComponent<BookmarkCheck1Props & RefAttributes<SVGSVGElement>>;

export default BookmarkCheck1;
export { BookmarkCheck1 };
