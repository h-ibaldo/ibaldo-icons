import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyCornerFlipped: ForwardRefExoticComponent<ChatStackReplyCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackReplyCornerFlipped;
export { ChatStackReplyCornerFlipped };
