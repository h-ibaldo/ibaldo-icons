import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTypingBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingBoxy: ForwardRefExoticComponent<ChatStackTypingBoxyProps & RefAttributes<Svg>>;

export default ChatStackTypingBoxy;
export { ChatStackTypingBoxy };
