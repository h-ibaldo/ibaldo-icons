import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryLowBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryLowBoxy: ForwardRefExoticComponent<BatteryLowBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryLowBoxy;
export { BatteryLowBoxy };
