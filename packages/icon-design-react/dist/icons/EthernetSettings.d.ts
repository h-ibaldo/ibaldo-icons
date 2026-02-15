import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EthernetSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EthernetSettings: ForwardRefExoticComponent<EthernetSettingsProps & RefAttributes<SVGSVGElement>>;

export default EthernetSettings;
export { EthernetSettings };
