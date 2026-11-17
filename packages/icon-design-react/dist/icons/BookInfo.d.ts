import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookInfoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookInfo: ForwardRefExoticComponent<BookInfoProps & RefAttributes<SVGSVGElement>>;

export default BookInfo;
export { BookInfo };
