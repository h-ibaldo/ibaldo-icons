import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTypingNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingNotch: ForwardRefExoticComponent<ChatStackTypingNotchProps & RefAttributes<Svg>>;

export default ChatStackTypingNotch;
export { ChatStackTypingNotch };
