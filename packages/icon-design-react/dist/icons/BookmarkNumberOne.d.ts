import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkNumberOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkNumberOne: ForwardRefExoticComponent<BookmarkNumberOneProps & RefAttributes<SVGSVGElement>>;

export default BookmarkNumberOne;
export { BookmarkNumberOne };
