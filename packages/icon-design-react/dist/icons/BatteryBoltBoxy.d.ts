import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryBoltBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryBoltBoxy: ForwardRefExoticComponent<BatteryBoltBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryBoltBoxy;
export { BatteryBoltBoxy };
