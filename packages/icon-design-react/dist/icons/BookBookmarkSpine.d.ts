import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkSpineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkSpine: ForwardRefExoticComponent<BookBookmarkSpineProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkSpine;
export { BookBookmarkSpine };
