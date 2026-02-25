import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Gears12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gears12: ForwardRefExoticComponent<Gears12Props & RefAttributes<SVGSVGElement>>;

export default Gears12;
export { Gears12 };
