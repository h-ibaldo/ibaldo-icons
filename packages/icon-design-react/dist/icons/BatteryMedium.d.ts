import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryMediumProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryMedium: ForwardRefExoticComponent<BatteryMediumProps & RefAttributes<SVGSVGElement>>;

export default BatteryMedium;
export { BatteryMedium };
