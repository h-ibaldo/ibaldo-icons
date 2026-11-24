import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserSettingsWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserSettingsWide: ForwardRefExoticComponent<UserSettingsWideProps & RefAttributes<SVGSVGElement>>;

export default UserSettingsWide;
export { UserSettingsWide };
