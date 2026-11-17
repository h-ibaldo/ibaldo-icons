import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkXCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkXCircleLarge: ForwardRefExoticComponent<BookmarkXCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkXCircleLarge;
export { BookmarkXCircleLarge };
