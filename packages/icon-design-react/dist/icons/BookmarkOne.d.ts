import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkOne: ForwardRefExoticComponent<BookmarkOneProps & RefAttributes<SVGSVGElement>>;

export default BookmarkOne;
export { BookmarkOne };
