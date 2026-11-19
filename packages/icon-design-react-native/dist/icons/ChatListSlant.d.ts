import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatListSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatListSlant: ForwardRefExoticComponent<ChatListSlantProps & RefAttributes<Svg>>;

export default ChatListSlant;
export { ChatListSlant };
