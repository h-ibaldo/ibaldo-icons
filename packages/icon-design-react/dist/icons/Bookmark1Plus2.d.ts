import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1Plus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Plus2: ForwardRefExoticComponent<Bookmark1Plus2Props & RefAttributes<SVGSVGElement>>;

export default Bookmark1Plus2;
export { Bookmark1Plus2 };
