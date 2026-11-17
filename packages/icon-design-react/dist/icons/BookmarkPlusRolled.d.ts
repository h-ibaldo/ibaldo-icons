import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPlusRolledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPlusRolled: ForwardRefExoticComponent<BookmarkPlusRolledProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPlusRolled;
export { BookmarkPlusRolled };
