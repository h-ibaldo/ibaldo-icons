import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackMinusEdgeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackMinusEdge: ForwardRefExoticComponent<BookmarkStackMinusEdgeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackMinusEdge;
export { BookmarkStackMinusEdge };
