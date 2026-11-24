import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyAllProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAll: ForwardRefExoticComponent<ChatStackReplyAllProps & RefAttributes<Svg>>;

export default ChatStackReplyAll;
export { ChatStackReplyAll };
