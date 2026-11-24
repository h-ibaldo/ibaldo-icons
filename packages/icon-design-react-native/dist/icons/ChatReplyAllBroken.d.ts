import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyAllBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllBroken: ForwardRefExoticComponent<ChatReplyAllBrokenProps & RefAttributes<Svg>>;

export default ChatReplyAllBroken;
export { ChatReplyAllBroken };
