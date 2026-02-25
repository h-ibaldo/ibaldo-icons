import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1X2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1X2: ForwardRefExoticComponent<Bookmark1X2Props & RefAttributes<SVGSVGElement>>;

export default Bookmark1X2;
export { Bookmark1X2 };
