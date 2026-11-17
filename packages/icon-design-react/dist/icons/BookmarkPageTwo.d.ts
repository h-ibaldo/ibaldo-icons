import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPageTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPageTwo: ForwardRefExoticComponent<BookmarkPageTwoProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPageTwo;
export { BookmarkPageTwo };
