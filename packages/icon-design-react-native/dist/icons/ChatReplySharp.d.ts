import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplySharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplySharp: ForwardRefExoticComponent<ChatReplySharpProps & RefAttributes<Svg>>;

export default ChatReplySharp;
export { ChatReplySharp };
