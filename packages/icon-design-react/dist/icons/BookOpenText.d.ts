import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenText: ForwardRefExoticComponent<BookOpenTextProps & RefAttributes<SVGSVGElement>>;

export default BookOpenText;
export { BookOpenText };
