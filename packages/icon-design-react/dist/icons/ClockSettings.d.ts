import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSettings: ForwardRefExoticComponent<ClockSettingsProps & RefAttributes<SVGSVGElement>>;

export default ClockSettings;
export { ClockSettings };
