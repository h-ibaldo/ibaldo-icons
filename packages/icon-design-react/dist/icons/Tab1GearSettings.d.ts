import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab1GearSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab1GearSettings: ForwardRefExoticComponent<Tab1GearSettingsProps & RefAttributes<SVGSVGElement>>;

export default Tab1GearSettings;
export { Tab1GearSettings };
