import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTypingSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTypingSharp: ForwardRefExoticComponent<ChatTypingSharpProps & RefAttributes<Svg>>;

export default ChatTypingSharp;
export { ChatTypingSharp };
