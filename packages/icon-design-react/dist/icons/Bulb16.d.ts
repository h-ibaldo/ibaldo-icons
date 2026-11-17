import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb16Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb16: ForwardRefExoticComponent<Bulb16Props & RefAttributes<SVGSVGElement>>;

export default Bulb16;
export { Bulb16 };
