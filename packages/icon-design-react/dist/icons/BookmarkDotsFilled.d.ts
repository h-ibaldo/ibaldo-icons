import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkDotsFilledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkDotsFilled: ForwardRefExoticComponent<BookmarkDotsFilledProps & RefAttributes<SVGSVGElement>>;

export default BookmarkDotsFilled;
export { BookmarkDotsFilled };
