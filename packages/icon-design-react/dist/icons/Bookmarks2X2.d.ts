import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmarks2X2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmarks2X2: ForwardRefExoticComponent<Bookmarks2X2Props & RefAttributes<SVGSVGElement>>;

export default Bookmarks2X2;
export { Bookmarks2X2 };
