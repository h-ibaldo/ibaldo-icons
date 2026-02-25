import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2X2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2X2: ForwardRefExoticComponent<Bookmark2X2Props & RefAttributes<SVGSVGElement>>;

export default Bookmark2X2;
export { Bookmark2X2 };
