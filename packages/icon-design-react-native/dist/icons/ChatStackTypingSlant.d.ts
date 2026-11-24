import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTypingSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingSlant: ForwardRefExoticComponent<ChatStackTypingSlantProps & RefAttributes<Svg>>;

export default ChatStackTypingSlant;
export { ChatStackTypingSlant };
