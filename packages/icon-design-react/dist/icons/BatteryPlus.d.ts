import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryPlus: ForwardRefExoticComponent<BatteryPlusProps & RefAttributes<SVGSVGElement>>;

export default BatteryPlus;
export { BatteryPlus };
