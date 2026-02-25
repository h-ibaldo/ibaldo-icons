import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Gears22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gears22: ForwardRefExoticComponent<Gears22Props & RefAttributes<SVGSVGElement>>;

export default Gears22;
export { Gears22 };
