import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab2ThreeDotsSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab2ThreeDotsSettings: ForwardRefExoticComponent<Tab2ThreeDotsSettingsProps & RefAttributes<SVGSVGElement>>;

export default Tab2ThreeDotsSettings;
export { Tab2ThreeDotsSettings };
