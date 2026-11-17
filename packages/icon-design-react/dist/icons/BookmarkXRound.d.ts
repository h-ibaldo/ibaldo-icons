import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkXRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkXRound: ForwardRefExoticComponent<BookmarkXRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkXRound;
export { BookmarkXRound };
