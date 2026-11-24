import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUserProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUser: ForwardRefExoticComponent<ChatUserProps & RefAttributes<Svg>>;

export default ChatUser;
export { ChatUser };
