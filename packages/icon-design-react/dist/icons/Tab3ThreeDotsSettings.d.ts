import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3ThreeDotsSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3ThreeDotsSettings: ForwardRefExoticComponent<Tab3ThreeDotsSettingsProps & RefAttributes<SVGSVGElement>>;

export default Tab3ThreeDotsSettings;
export { Tab3ThreeDotsSettings };
