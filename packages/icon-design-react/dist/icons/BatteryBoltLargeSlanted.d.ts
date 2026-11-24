import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryBoltLargeSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryBoltLargeSlanted: ForwardRefExoticComponent<BatteryBoltLargeSlantedProps & RefAttributes<SVGSVGElement>>;

export default BatteryBoltLargeSlanted;
export { BatteryBoltLargeSlanted };
