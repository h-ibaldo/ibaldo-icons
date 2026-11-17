import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPageThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPageThree: ForwardRefExoticComponent<BookmarkPageThreeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPageThree;
export { BookmarkPageThree };
