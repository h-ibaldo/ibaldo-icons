import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryAlert: ForwardRefExoticComponent<BatteryAlertProps & RefAttributes<SVGSVGElement>>;

export default BatteryAlert;
export { BatteryAlert };
