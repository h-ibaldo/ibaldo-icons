import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryFullProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryFull: ForwardRefExoticComponent<BatteryFullProps & RefAttributes<SVGSVGElement>>;

export default BatteryFull;
export { BatteryFull };
