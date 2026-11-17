import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCircledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCircled: ForwardRefExoticComponent<BookmarkCircledProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCircled;
export { BookmarkCircled };
