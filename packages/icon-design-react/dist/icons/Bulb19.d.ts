import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb19Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb19: ForwardRefExoticComponent<Bulb19Props & RefAttributes<SVGSVGElement>>;

export default Bulb19;
export { Bulb19 };
