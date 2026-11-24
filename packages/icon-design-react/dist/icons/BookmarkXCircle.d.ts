import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkXCircle: ForwardRefExoticComponent<BookmarkXCircleProps & RefAttributes<SVGSVGElement>>;

export default BookmarkXCircle;
export { BookmarkXCircle };
