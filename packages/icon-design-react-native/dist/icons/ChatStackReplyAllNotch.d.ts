import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyAllNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllNotch: ForwardRefExoticComponent<ChatStackReplyAllNotchProps & RefAttributes<Svg>>;

export default ChatStackReplyAllNotch;
export { ChatStackReplyAllNotch };
