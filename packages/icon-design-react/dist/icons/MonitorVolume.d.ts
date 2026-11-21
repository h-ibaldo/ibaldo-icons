import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MonitorVolumeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MonitorVolume: ForwardRefExoticComponent<MonitorVolumeProps & RefAttributes<SVGSVGElement>>;

export default MonitorVolume;
export { MonitorVolume };
