import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarksCollectionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarksCollection: ForwardRefExoticComponent<BookmarksCollectionProps & RefAttributes<SVGSVGElement>>;

export default BookmarksCollection;
export { BookmarksCollection };
