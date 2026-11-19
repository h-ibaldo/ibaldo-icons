import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatListRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatListRound: ForwardRefExoticComponent<ChatListRoundProps & RefAttributes<Svg>>;

export default ChatListRound;
export { ChatListRound };
