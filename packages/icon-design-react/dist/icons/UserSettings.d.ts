import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserSettings: ForwardRefExoticComponent<UserSettingsProps & RefAttributes<SVGSVGElement>>;

export default UserSettings;
export { UserSettings };
