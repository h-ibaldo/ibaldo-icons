import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyAllRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllRound: ForwardRefExoticComponent<ChatReplyAllRoundProps & RefAttributes<Svg>>;

export default ChatReplyAllRound;
export { ChatReplyAllRound };
