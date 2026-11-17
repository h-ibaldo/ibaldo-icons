import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackXEdgeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackXEdge: ForwardRefExoticComponent<BookmarkStackXEdgeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackXEdge;
export { BookmarkStackXEdge };
