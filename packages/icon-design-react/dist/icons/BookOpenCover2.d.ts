import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenCover2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenCover2: ForwardRefExoticComponent<BookOpenCover2Props & RefAttributes<SVGSVGElement>>;

export default BookOpenCover2;
export { BookOpenCover2 };
