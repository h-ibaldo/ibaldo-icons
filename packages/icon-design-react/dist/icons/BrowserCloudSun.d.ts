import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserCloudSunProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserCloudSun: ForwardRefExoticComponent<BrowserCloudSunProps & RefAttributes<SVGSVGElement>>;

export default BrowserCloudSun;
export { BrowserCloudSun };
