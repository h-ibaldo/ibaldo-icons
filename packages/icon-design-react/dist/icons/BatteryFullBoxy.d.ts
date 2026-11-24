import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryFullBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryFullBoxy: ForwardRefExoticComponent<BatteryFullBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryFullBoxy;
export { BatteryFullBoxy };
