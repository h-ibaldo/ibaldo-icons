import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmarks2XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmarks2X: ForwardRefExoticComponent<Bookmarks2XProps & RefAttributes<SVGSVGElement>>;

export default Bookmarks2X;
export { Bookmarks2X };
