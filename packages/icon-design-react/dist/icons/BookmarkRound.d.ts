import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkRound: ForwardRefExoticComponent<BookmarkRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkRound;
export { BookmarkRound };
