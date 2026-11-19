import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackUnderlineTypingSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTypingSlant: ForwardRefExoticComponent<ChatStackUnderlineTypingSlantProps & RefAttributes<Svg>>;

export default ChatStackUnderlineTypingSlant;
export { ChatStackUnderlineTypingSlant };
