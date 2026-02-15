import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1Page1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Page1: ForwardRefExoticComponent<Bookmark1Page1Props & RefAttributes<SVGSVGElement>>;

export default Bookmark1Page1;
export { Bookmark1Page1 };
