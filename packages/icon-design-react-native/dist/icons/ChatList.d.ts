import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatListProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatList: ForwardRefExoticComponent<ChatListProps & RefAttributes<Svg>>;

export default ChatList;
export { ChatList };
