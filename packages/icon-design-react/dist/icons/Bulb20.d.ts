import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb20Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb20: ForwardRefExoticComponent<Bulb20Props & RefAttributes<SVGSVGElement>>;

export default Bulb20;
export { Bulb20 };
