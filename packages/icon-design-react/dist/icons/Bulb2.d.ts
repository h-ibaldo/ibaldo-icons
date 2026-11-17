import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb2: ForwardRefExoticComponent<Bulb2Props & RefAttributes<SVGSVGElement>>;

export default Bulb2;
export { Bulb2 };
