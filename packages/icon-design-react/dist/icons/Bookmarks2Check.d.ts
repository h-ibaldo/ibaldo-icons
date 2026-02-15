import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmarks2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmarks2Check: ForwardRefExoticComponent<Bookmarks2CheckProps & RefAttributes<SVGSVGElement>>;

export default Bookmarks2Check;
export { Bookmarks2Check };
