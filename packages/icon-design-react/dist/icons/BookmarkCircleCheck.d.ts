import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCircleCheck: ForwardRefExoticComponent<BookmarkCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCircleCheck;
export { BookmarkCircleCheck };
