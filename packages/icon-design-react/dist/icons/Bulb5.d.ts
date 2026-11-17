import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb5: ForwardRefExoticComponent<Bulb5Props & RefAttributes<SVGSVGElement>>;

export default Bulb5;
export { Bulb5 };
