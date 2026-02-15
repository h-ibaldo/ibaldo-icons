import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Gears3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gears3: ForwardRefExoticComponent<Gears3Props & RefAttributes<SVGSVGElement>>;

export default Gears3;
export { Gears3 };
