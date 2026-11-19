import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyAllSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllSharp: ForwardRefExoticComponent<ChatReplyAllSharpProps & RefAttributes<Svg>>;

export default ChatReplyAllSharp;
export { ChatReplyAllSharp };
