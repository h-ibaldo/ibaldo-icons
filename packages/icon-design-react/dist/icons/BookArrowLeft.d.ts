import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookArrowLeft: ForwardRefExoticComponent<BookArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default BookArrowLeft;
export { BookArrowLeft };
