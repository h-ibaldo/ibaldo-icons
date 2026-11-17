import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb3: ForwardRefExoticComponent<Bulb3Props & RefAttributes<SVGSVGElement>>;

export default Bulb3;
export { Bulb3 };
