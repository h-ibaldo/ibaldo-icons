import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb9: ForwardRefExoticComponent<Bulb9Props & RefAttributes<SVGSVGElement>>;

export default Bulb9;
export { Bulb9 };
