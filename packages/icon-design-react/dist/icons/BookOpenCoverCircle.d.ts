import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookOpenCoverCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookOpenCoverCircle: ForwardRefExoticComponent<BookOpenCoverCircleProps & RefAttributes<SVGSVGElement>>;

export default BookOpenCoverCircle;
export { BookOpenCoverCircle };
