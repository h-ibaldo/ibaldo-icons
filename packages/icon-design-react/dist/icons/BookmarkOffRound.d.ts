import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkOffRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkOffRound: ForwardRefExoticComponent<BookmarkOffRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkOffRound;
export { BookmarkOffRound };
