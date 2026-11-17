import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSettingsLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSettingsLarge: ForwardRefExoticComponent<ClockSettingsLargeProps & RefAttributes<SVGSVGElement>>;

export default ClockSettingsLarge;
export { ClockSettingsLarge };
