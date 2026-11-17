import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb11: ForwardRefExoticComponent<Bulb11Props & RefAttributes<SVGSVGElement>>;

export default Bulb11;
export { Bulb11 };
