import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryBolt: ForwardRefExoticComponent<BatteryBoltProps & RefAttributes<SVGSVGElement>>;

export default BatteryBolt;
export { BatteryBolt };
