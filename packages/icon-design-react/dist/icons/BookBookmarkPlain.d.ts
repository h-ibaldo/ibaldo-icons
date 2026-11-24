import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkPlain: ForwardRefExoticComponent<BookBookmarkPlainProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkPlain;
export { BookBookmarkPlain };
