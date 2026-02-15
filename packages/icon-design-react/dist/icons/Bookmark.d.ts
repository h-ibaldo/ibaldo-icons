import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark: ForwardRefExoticComponent<BookmarkProps & RefAttributes<SVGSVGElement>>;

export default Bookmark;
export { Bookmark };
