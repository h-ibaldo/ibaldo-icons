import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackEdgeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackEdge: ForwardRefExoticComponent<BookmarkStackEdgeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackEdge;
export { BookmarkStackEdge };
