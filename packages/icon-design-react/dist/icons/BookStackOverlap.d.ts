import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookStackOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookStackOverlap: ForwardRefExoticComponent<BookStackOverlapProps & RefAttributes<SVGSVGElement>>;

export default BookStackOverlap;
export { BookStackOverlap };
