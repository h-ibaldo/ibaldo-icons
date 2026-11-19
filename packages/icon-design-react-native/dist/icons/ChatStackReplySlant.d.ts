import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplySlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplySlant: ForwardRefExoticComponent<ChatStackReplySlantProps & RefAttributes<Svg>>;

export default ChatStackReplySlant;
export { ChatStackReplySlant };
