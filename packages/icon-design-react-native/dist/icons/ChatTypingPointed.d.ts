import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTypingPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTypingPointed: ForwardRefExoticComponent<ChatTypingPointedProps & RefAttributes<Svg>>;

export default ChatTypingPointed;
export { ChatTypingPointed };
