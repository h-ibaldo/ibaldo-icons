import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyAllSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllSlant: ForwardRefExoticComponent<ChatStackReplyAllSlantProps & RefAttributes<Svg>>;

export default ChatStackReplyAllSlant;
export { ChatStackReplyAllSlant };
