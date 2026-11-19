import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackUnderlineTypingBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTypingBroken: ForwardRefExoticComponent<ChatStackUnderlineTypingBrokenProps & RefAttributes<Svg>>;

export default ChatStackUnderlineTypingBroken;
export { ChatStackUnderlineTypingBroken };
