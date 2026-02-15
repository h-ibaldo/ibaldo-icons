import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmarks2PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmarks2Plus: ForwardRefExoticComponent<Bookmarks2PlusProps & RefAttributes<SVGSVGElement>>;

export default Bookmarks2Plus;
export { Bookmarks2Plus };
