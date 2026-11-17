import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkRounded: ForwardRefExoticComponent<BookBookmarkRoundedProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkRounded;
export { BookBookmarkRounded };
