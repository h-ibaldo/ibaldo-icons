import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkDotsCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkDotsCircle: ForwardRefExoticComponent<BookmarkDotsCircleProps & RefAttributes<SVGSVGElement>>;

export default BookmarkDotsCircle;
export { BookmarkDotsCircle };
