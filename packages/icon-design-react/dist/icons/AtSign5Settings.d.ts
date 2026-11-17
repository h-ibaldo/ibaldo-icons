import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign5SettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign5Settings: ForwardRefExoticComponent<AtSign5SettingsProps & RefAttributes<SVGSVGElement>>;

export default AtSign5Settings;
export { AtSign5Settings };
