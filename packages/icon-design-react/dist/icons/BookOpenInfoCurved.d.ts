import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenInfoCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenInfoCurved: ForwardRefExoticComponent<BookOpenInfoCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookOpenInfoCurved;
export { BookOpenInfoCurved };
