import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackUnderlineTypingBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTypingBoxy: ForwardRefExoticComponent<ChatStackUnderlineTypingBoxyProps & RefAttributes<Svg>>;

export default ChatStackUnderlineTypingBoxy;
export { ChatStackUnderlineTypingBoxy };
