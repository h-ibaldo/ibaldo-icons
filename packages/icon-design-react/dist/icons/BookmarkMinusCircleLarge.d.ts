import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkMinusCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkMinusCircleLarge: ForwardRefExoticComponent<BookmarkMinusCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkMinusCircleLarge;
export { BookmarkMinusCircleLarge };
