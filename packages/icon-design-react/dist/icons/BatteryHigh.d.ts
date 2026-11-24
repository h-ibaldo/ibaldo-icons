import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryHighProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryHigh: ForwardRefExoticComponent<BatteryHighProps & RefAttributes<SVGSVGElement>>;

export default BatteryHigh;
export { BatteryHigh };
