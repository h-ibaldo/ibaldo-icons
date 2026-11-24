import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyAllSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllSlant: ForwardRefExoticComponent<ChatReplyAllSlantProps & RefAttributes<Svg>>;

export default ChatReplyAllSlant;
export { ChatReplyAllSlant };
