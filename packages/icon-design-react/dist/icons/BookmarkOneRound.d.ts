import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkOneRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkOneRound: ForwardRefExoticComponent<BookmarkOneRoundProps & RefAttributes<SVGSVGElement>>;

export default BookmarkOneRound;
export { BookmarkOneRound };
