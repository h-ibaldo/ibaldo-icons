import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmarks2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmarks2: ForwardRefExoticComponent<Bookmarks2Props & RefAttributes<SVGSVGElement>>;

export default Bookmarks2;
export { Bookmarks2 };
