import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplayWifiProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplayWifi: ForwardRefExoticComponent<AirplayWifiProps & RefAttributes<SVGSVGElement>>;

export default AirplayWifi;
export { AirplayWifi };
