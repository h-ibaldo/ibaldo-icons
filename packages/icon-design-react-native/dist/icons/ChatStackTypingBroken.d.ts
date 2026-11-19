import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTypingBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingBroken: ForwardRefExoticComponent<ChatStackTypingBrokenProps & RefAttributes<Svg>>;

export default ChatStackTypingBroken;
export { ChatStackTypingBroken };
