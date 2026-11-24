import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WifiSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WifiSettings: ForwardRefExoticComponent<WifiSettingsProps & RefAttributes<SVGSVGElement>>;

export default WifiSettings;
export { WifiSettings };
