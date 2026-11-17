import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStarRolledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStarRolled: ForwardRefExoticComponent<BookmarkStarRolledProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStarRolled;
export { BookmarkStarRolled };
