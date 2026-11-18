import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookTextRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookTextRound: ForwardRefExoticComponent<BookTextRoundProps & RefAttributes<SVGSVGElement>>;

export default BookTextRound;
export { BookTextRound };
