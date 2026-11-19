import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyAllProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyAll: ForwardRefExoticComponent<ChatReplyAllProps & RefAttributes<Svg>>;

export default ChatReplyAll;
export { ChatReplyAll };
