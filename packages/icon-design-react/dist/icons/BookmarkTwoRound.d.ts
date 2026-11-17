import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkTwoRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkTwoRound: ForwardRefExoticComponent<BookmarkTwoRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkTwoRound;
export { BookmarkTwoRound };
