import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryPlusBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryPlusBoxy: ForwardRefExoticComponent<BatteryPlusBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryPlusBoxy;
export { BatteryPlusBoxy };
