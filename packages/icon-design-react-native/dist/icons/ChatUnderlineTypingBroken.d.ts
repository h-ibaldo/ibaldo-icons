import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUnderlineTypingBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineTypingBroken: ForwardRefExoticComponent<ChatUnderlineTypingBrokenProps & RefAttributes<Svg>>;

export default ChatUnderlineTypingBroken;
export { ChatUnderlineTypingBroken };
