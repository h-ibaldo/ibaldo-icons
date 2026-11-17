import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCheckRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCheckRound: ForwardRefExoticComponent<BookmarkCheckRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCheckRound;
export { BookmarkCheckRound };
