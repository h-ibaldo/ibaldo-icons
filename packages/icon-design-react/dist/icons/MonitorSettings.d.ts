import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorSettings: ForwardRefExoticComponent<MonitorSettingsProps & RefAttributes<SVGSVGElement>>;

export default MonitorSettings;
export { MonitorSettings };
