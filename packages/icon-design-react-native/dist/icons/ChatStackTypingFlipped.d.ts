import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTypingFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingFlipped: ForwardRefExoticComponent<ChatStackTypingFlippedProps & RefAttributes<Svg>>;

export default ChatStackTypingFlipped;
export { ChatStackTypingFlipped };
