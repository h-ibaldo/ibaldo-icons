import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCheckCircle: ForwardRefExoticComponent<BookmarkCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCheckCircle;
export { BookmarkCheckCircle };
