import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkMinusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkMinusRound: ForwardRefExoticComponent<BookmarkMinusRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkMinusRound;
export { BookmarkMinusRound };
