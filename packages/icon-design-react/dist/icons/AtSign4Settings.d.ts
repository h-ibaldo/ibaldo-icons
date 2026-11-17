import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign4SettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign4Settings: ForwardRefExoticComponent<AtSign4SettingsProps & RefAttributes<SVGSVGElement>>;

export default AtSign4Settings;
export { AtSign4Settings };
