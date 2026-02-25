import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Gears42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gears42: ForwardRefExoticComponent<Gears42Props & RefAttributes<SVGSVGElement>>;

export default Gears42;
export { Gears42 };
