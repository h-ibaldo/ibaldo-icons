import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplySlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplySlant: ForwardRefExoticComponent<ChatReplySlantProps & RefAttributes<Svg>>;

export default ChatReplySlant;
export { ChatReplySlant };
