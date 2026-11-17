import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackTop: ForwardRefExoticComponent<BookmarkStackTopProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackTop;
export { BookmarkStackTop };
