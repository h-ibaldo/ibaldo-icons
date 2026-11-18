import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BatteryMinusPlusBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BatteryMinusPlusBoxy: ForwardRefExoticComponent<BatteryMinusPlusBoxyProps & RefAttributes<SVGSVGElement>>;

export default BatteryMinusPlusBoxy;
export { BatteryMinusPlusBoxy };
