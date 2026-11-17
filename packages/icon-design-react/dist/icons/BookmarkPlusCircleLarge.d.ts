import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPlusCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPlusCircleLarge: ForwardRefExoticComponent<BookmarkPlusCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPlusCircleLarge;
export { BookmarkPlusCircleLarge };
