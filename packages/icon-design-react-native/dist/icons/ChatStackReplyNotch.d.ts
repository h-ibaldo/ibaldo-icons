import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyNotch: ForwardRefExoticComponent<ChatStackReplyNotchProps & RefAttributes<Svg>>;

export default ChatStackReplyNotch;
export { ChatStackReplyNotch };
