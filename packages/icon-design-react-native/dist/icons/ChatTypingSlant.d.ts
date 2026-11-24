import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTypingSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTypingSlant: ForwardRefExoticComponent<ChatTypingSlantProps & RefAttributes<Svg>>;

export default ChatTypingSlant;
export { ChatTypingSlant };
