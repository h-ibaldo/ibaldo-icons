import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyBroken: ForwardRefExoticComponent<ChatReplyBrokenProps & RefAttributes<Svg>>;

export default ChatReplyBroken;
export { ChatReplyBroken };
