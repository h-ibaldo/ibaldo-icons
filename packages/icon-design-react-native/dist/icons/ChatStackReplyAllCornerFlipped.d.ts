import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyAllCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllCornerFlipped: ForwardRefExoticComponent<ChatStackReplyAllCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackReplyAllCornerFlipped;
export { ChatStackReplyAllCornerFlipped };
