import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackCheckEdgeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackCheckEdge: ForwardRefExoticComponent<BookmarkStackCheckEdgeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackCheckEdge;
export { BookmarkStackCheckEdge };
