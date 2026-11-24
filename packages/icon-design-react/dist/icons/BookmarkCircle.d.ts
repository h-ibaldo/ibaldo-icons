import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCircle: ForwardRefExoticComponent<BookmarkCircleProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCircle;
export { BookmarkCircle };
