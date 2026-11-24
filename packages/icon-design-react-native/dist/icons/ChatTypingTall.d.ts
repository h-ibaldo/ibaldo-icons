import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTypingTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTypingTall: ForwardRefExoticComponent<ChatTypingTallProps & RefAttributes<Svg>>;

export default ChatTypingTall;
export { ChatTypingTall };
