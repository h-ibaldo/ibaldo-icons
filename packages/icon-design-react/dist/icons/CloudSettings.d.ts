import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSettings: ForwardRefExoticComponent<CloudSettingsProps & RefAttributes<SVGSVGElement>>;

export default CloudSettings;
export { CloudSettings };
