import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserHeadsetSpikyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserHeadsetSpiky: ForwardRefExoticComponent<UserHeadsetSpikyProps & RefAttributes<Svg>>;

export default UserHeadsetSpiky;
export { UserHeadsetSpiky };
