import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReply: ForwardRefExoticComponent<ChatReplyProps & RefAttributes<Svg>>;

export default ChatReply;
export { ChatReply };
