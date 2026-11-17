import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb13Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb13: ForwardRefExoticComponent<Bulb13Props & RefAttributes<SVGSVGElement>>;

export default Bulb13;
export { Bulb13 };
