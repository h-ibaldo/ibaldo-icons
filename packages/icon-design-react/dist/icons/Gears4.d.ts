import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Gears4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gears4: ForwardRefExoticComponent<Gears4Props & RefAttributes<SVGSVGElement>>;

export default Gears4;
export { Gears4 };
