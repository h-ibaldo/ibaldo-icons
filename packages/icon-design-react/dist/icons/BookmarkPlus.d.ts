import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPlus: ForwardRefExoticComponent<BookmarkPlusProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPlus;
export { BookmarkPlus };
