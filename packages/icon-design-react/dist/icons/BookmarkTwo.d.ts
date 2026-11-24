import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkTwo: ForwardRefExoticComponent<BookmarkTwoProps & RefAttributes<SVGSVGElement>>;

export default BookmarkTwo;
export { BookmarkTwo };
