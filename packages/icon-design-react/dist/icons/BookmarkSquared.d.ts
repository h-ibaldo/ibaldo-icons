import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkSquared: ForwardRefExoticComponent<BookmarkSquaredProps & RefAttributes<SVGSVGElement>>;

export default BookmarkSquared;
export { BookmarkSquared };
