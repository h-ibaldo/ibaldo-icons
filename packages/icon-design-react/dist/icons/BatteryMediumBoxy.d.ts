import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryMediumBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryMediumBoxy: ForwardRefExoticComponent<BatteryMediumBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryMediumBoxy;
export { BatteryMediumBoxy };
