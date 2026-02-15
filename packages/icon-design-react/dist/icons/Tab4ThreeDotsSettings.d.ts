import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4ThreeDotsSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4ThreeDotsSettings: ForwardRefExoticComponent<Tab4ThreeDotsSettingsProps & RefAttributes<SVGSVGElement>>;

export default Tab4ThreeDotsSettings;
export { Tab4ThreeDotsSettings };
