import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTypingBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTypingBoxy: ForwardRefExoticComponent<ChatTypingBoxyProps & RefAttributes<Svg>>;

export default ChatTypingBoxy;
export { ChatTypingBoxy };
