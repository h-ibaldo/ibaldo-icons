import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyAllBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllBroken: ForwardRefExoticComponent<ChatStackReplyAllBrokenProps & RefAttributes<Svg>>;

export default ChatStackReplyAllBroken;
export { ChatStackReplyAllBroken };
