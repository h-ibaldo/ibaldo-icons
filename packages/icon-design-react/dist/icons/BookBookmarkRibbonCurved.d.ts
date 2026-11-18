import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkRibbonCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkRibbonCurved: ForwardRefExoticComponent<BookBookmarkRibbonCurvedProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkRibbonCurved;
export { BookBookmarkRibbonCurved };
