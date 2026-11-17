import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkXRolledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkXRolled: ForwardRefExoticComponent<BookmarkXRolledProps & RefAttributes<SVGSVGElement>>;

export default BookmarkXRolled;
export { BookmarkXRolled };
