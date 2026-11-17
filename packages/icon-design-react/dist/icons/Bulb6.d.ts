import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb6: ForwardRefExoticComponent<Bulb6Props & RefAttributes<SVGSVGElement>>;

export default Bulb6;
export { Bulb6 };
