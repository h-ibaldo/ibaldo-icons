import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb10Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb10: ForwardRefExoticComponent<Bulb10Props & RefAttributes<SVGSVGElement>>;

export default Bulb10;
export { Bulb10 };
