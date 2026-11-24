import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryPlugBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryPlugBoxy: ForwardRefExoticComponent<BatteryPlugBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryPlugBoxy;
export { BatteryPlugBoxy };
