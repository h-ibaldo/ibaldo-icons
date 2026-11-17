import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3SettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3Settings: ForwardRefExoticComponent<Tab3SettingsProps & RefAttributes<SVGSVGElement>>;

export default Tab3Settings;
export { Tab3Settings };
