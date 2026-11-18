import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookshelfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookshelf: ForwardRefExoticComponent<BookshelfProps & RefAttributes<SVGSVGElement>>;

export default Bookshelf;
export { Bookshelf };
