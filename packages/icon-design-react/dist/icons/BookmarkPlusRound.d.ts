import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPlusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPlusRound: ForwardRefExoticComponent<BookmarkPlusRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPlusRound;
export { BookmarkPlusRound };
