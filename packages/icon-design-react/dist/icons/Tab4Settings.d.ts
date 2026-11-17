import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4SettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4Settings: ForwardRefExoticComponent<Tab4SettingsProps & RefAttributes<SVGSVGElement>>;

export default Tab4Settings;
export { Tab4Settings };
