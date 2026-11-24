import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryAlertBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryAlertBoxy: ForwardRefExoticComponent<BatteryAlertBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryAlertBoxy;
export { BatteryAlertBoxy };
