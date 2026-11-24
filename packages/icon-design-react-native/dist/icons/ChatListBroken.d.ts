import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatListBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatListBroken: ForwardRefExoticComponent<ChatListBrokenProps & RefAttributes<Svg>>;

export default ChatListBroken;
export { ChatListBroken };
