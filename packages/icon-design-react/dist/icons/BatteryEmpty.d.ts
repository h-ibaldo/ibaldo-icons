import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryEmptyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryEmpty: ForwardRefExoticComponent<BatteryEmptyProps & RefAttributes<SVGSVGElement>>;

export default BatteryEmpty;
export { BatteryEmpty };
