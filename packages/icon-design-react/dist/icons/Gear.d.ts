import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gear: ForwardRefExoticComponent<GearProps & RefAttributes<SVGSVGElement>>;

export default Gear;
export { Gear };
