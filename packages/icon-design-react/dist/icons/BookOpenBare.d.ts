import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenBare: ForwardRefExoticComponent<BookOpenBareProps & RefAttributes<SVGSVGElement>>;

export default BookOpenBare;
export { BookOpenBare };
