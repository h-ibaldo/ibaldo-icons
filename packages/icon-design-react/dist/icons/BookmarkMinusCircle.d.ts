import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkMinusCircle: ForwardRefExoticComponent<BookmarkMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default BookmarkMinusCircle;
export { BookmarkMinusCircle };
