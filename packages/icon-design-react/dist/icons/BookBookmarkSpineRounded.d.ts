import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkSpineRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkSpineRounded: ForwardRefExoticComponent<BookBookmarkSpineRoundedProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkSpineRounded;
export { BookBookmarkSpineRounded };
