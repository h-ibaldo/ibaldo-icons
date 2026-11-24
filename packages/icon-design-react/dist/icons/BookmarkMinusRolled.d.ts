import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkMinusRolledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkMinusRolled: ForwardRefExoticComponent<BookmarkMinusRolledProps & RefAttributes<SVGSVGElement>>;

export default BookmarkMinusRolled;
export { BookmarkMinusRolled };
