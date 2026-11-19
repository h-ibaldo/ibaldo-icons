import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryEmptyBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryEmptyBoxy: ForwardRefExoticComponent<BatteryEmptyBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryEmptyBoxy;
export { BatteryEmptyBoxy };
