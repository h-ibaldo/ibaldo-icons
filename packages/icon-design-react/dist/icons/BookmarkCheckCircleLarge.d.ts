import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCheckCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCheckCircleLarge: ForwardRefExoticComponent<BookmarkCheckCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCheckCircleLarge;
export { BookmarkCheckCircleLarge };
