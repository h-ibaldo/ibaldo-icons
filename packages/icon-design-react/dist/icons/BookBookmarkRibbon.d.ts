import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkRibbonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkRibbon: ForwardRefExoticComponent<BookBookmarkRibbonProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkRibbon;
export { BookBookmarkRibbon };
