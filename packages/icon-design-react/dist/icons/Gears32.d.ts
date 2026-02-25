import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Gears32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gears32: ForwardRefExoticComponent<Gears32Props & RefAttributes<SVGSVGElement>>;

export default Gears32;
export { Gears32 };
