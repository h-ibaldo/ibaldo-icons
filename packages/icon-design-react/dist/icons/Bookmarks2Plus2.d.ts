import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmarks2Plus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmarks2Plus2: ForwardRefExoticComponent<Bookmarks2Plus2Props & RefAttributes<SVGSVGElement>>;

export default Bookmarks2Plus2;
export { Bookmarks2Plus2 };
