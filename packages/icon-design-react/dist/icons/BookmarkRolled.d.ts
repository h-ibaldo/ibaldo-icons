import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkRolledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkRolled: ForwardRefExoticComponent<BookmarkRolledProps & RefAttributes<SVGSVGElement>>;

export default BookmarkRolled;
export { BookmarkRolled };
