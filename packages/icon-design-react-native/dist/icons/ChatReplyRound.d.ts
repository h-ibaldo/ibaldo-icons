import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyRound: ForwardRefExoticComponent<ChatReplyRoundProps & RefAttributes<Svg>>;

export default ChatReplyRound;
export { ChatReplyRound };
