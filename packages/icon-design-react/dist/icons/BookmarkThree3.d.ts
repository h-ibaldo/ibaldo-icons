import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkThree3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkThree3: ForwardRefExoticComponent<BookmarkThree3Props & RefAttributes<SVGSVGElement>>;

export default BookmarkThree3;
export { BookmarkThree3 };
