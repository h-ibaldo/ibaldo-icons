import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scroll1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scroll1: ForwardRefExoticComponent<Scroll1Props & RefAttributes<SVGSVGElement>>;

export default Scroll1;
export { Scroll1 };
