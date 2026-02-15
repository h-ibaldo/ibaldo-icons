import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmarks2MinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmarks2Minus: ForwardRefExoticComponent<Bookmarks2MinusProps & RefAttributes<SVGSVGElement>>;

export default Bookmarks2Minus;
export { Bookmarks2Minus };
