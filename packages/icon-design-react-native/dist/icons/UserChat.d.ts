import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserChat: ForwardRefExoticComponent<UserChatProps & RefAttributes<Svg>>;

export default UserChat;
export { UserChat };
