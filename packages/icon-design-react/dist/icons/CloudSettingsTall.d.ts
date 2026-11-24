import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSettingsTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSettingsTall: ForwardRefExoticComponent<CloudSettingsTallProps & RefAttributes<SVGSVGElement>>;

export default CloudSettingsTall;
export { CloudSettingsTall };
