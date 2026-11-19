import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReply: ForwardRefExoticComponent<ChatStackReplyProps & RefAttributes<Svg>>;

export default ChatStackReply;
export { ChatStackReply };
