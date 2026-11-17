import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPlusTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPlusTwo: ForwardRefExoticComponent<BookmarkPlusTwoProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPlusTwo;
export { BookmarkPlusTwo };
