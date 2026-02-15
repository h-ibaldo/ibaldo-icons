import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1X1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1X1: ForwardRefExoticComponent<Bookmark1X1Props & RefAttributes<SVGSVGElement>>;

export default Bookmark1X1;
export { Bookmark1X1 };
