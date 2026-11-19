import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyBroken: ForwardRefExoticComponent<ChatStackReplyBrokenProps & RefAttributes<Svg>>;

export default ChatStackReplyBroken;
export { ChatStackReplyBroken };
