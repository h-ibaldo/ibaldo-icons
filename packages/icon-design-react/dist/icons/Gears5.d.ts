import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Gears5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gears5: ForwardRefExoticComponent<Gears5Props & RefAttributes<SVGSVGElement>>;

export default Gears5;
export { Gears5 };
