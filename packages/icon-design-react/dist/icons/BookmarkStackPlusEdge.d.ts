import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStackPlusEdgeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStackPlusEdge: ForwardRefExoticComponent<BookmarkStackPlusEdgeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStackPlusEdge;
export { BookmarkStackPlusEdge };
