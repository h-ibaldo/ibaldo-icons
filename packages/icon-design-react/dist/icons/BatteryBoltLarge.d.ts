import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryBoltLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryBoltLarge: ForwardRefExoticComponent<BatteryBoltLargeProps & RefAttributes<SVGSVGElement>>;

export default BatteryBoltLarge;
export { BatteryBoltLarge };
