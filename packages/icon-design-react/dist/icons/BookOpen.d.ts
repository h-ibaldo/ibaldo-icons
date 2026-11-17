import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpen: ForwardRefExoticComponent<BookOpenProps & RefAttributes<SVGSVGElement>>;

export default BookOpen;
export { BookOpen };
