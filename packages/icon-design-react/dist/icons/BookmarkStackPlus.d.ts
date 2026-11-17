import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackPlus: ForwardRefExoticComponent<BookmarkStackPlusProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackPlus;
export { BookmarkStackPlus };
