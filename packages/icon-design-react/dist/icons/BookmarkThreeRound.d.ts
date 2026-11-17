import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkThreeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkThreeRound: ForwardRefExoticComponent<BookmarkThreeRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkThreeRound;
export { BookmarkThreeRound };
