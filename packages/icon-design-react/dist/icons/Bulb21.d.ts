import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb21Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb21: ForwardRefExoticComponent<Bulb21Props & RefAttributes<SVGSVGElement>>;

export default Bulb21;
export { Bulb21 };
