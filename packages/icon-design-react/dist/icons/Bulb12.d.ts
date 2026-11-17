import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb12: ForwardRefExoticComponent<Bulb12Props & RefAttributes<SVGSVGElement>>;

export default Bulb12;
export { Bulb12 };
