import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkHeartRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkHeartRound: ForwardRefExoticComponent<BookmarkHeartRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkHeartRound;
export { BookmarkHeartRound };
