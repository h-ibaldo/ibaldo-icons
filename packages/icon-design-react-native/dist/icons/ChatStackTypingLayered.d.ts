import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTypingLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingLayered: ForwardRefExoticComponent<ChatStackTypingLayeredProps & RefAttributes<Svg>>;

export default ChatStackTypingLayered;
export { ChatStackTypingLayered };
