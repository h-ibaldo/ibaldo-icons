import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmarks1PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmarks1Plus: ForwardRefExoticComponent<Bookmarks1PlusProps & RefAttributes<SVGSVGElement>>;

export default Bookmarks1Plus;
export { Bookmarks1Plus };
