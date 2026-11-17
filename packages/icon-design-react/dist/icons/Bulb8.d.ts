import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bulb8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bulb8: ForwardRefExoticComponent<Bulb8Props & RefAttributes<SVGSVGElement>>;

export default Bulb8;
export { Bulb8 };
