import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserSettingsWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserSettingsWide: ForwardRefExoticComponent<UserSettingsWideProps & RefAttributes<Svg>>;

export default UserSettingsWide;
export { UserSettingsWide };
