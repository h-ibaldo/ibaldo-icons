import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkSlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkSlash: ForwardRefExoticComponent<BookmarkSlashProps & RefAttributes<SVGSVGElement>>;

export default BookmarkSlash;
export { BookmarkSlash };
