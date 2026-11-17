import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPlusCircle: ForwardRefExoticComponent<BookmarkPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPlusCircle;
export { BookmarkPlusCircle };
