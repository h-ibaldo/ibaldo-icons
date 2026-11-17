import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkHeart: ForwardRefExoticComponent<BookmarkHeartProps & RefAttributes<SVGSVGElement>>;

export default BookmarkHeart;
export { BookmarkHeart };
