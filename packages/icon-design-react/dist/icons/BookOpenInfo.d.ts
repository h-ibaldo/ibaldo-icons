import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenInfoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenInfo: ForwardRefExoticComponent<BookOpenInfoProps & RefAttributes<SVGSVGElement>>;

export default BookOpenInfo;
export { BookOpenInfo };
