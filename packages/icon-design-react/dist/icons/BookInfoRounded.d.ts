import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookInfoRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookInfoRounded: ForwardRefExoticComponent<BookInfoRoundedProps & RefAttributes<SVGSVGElement>>;

export default BookInfoRounded;
export { BookInfoRounded };
