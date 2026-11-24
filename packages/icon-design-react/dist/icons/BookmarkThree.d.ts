import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkThree: ForwardRefExoticComponent<BookmarkThreeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkThree;
export { BookmarkThree };
