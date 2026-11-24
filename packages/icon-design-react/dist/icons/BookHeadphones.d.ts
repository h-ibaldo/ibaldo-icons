import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookHeadphonesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookHeadphones: ForwardRefExoticComponent<BookHeadphonesProps & RefAttributes<SVGSVGElement>>;

export default BookHeadphones;
export { BookHeadphones };
