import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryLowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryLow: ForwardRefExoticComponent<BatteryLowProps & RefAttributes<SVGSVGElement>>;

export default BatteryLow;
export { BatteryLow };
