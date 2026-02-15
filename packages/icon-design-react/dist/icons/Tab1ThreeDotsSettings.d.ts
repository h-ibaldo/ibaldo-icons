import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab1ThreeDotsSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab1ThreeDotsSettings: ForwardRefExoticComponent<Tab1ThreeDotsSettingsProps & RefAttributes<SVGSVGElement>>;

export default Tab1ThreeDotsSettings;
export { Tab1ThreeDotsSettings };
