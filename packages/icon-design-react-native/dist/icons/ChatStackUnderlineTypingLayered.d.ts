import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackUnderlineTypingLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTypingLayered: ForwardRefExoticComponent<ChatStackUnderlineTypingLayeredProps & RefAttributes<Svg>>;

export default ChatStackUnderlineTypingLayered;
export { ChatStackUnderlineTypingLayered };
