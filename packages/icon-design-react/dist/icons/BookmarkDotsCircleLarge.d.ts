import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkDotsCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkDotsCircleLarge: ForwardRefExoticComponent<BookmarkDotsCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkDotsCircleLarge;
export { BookmarkDotsCircleLarge };
