import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb17Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb17: ForwardRefExoticComponent<Bulb17Props & RefAttributes<SVGSVGElement>>;

export default Bulb17;
export { Bulb17 };
