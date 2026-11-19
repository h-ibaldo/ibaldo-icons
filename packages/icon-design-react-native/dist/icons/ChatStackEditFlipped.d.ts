import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackEditFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackEditFlipped: ForwardRefExoticComponent<ChatStackEditFlippedProps & RefAttributes<Svg>>;

export default ChatStackEditFlipped;
export { ChatStackEditFlipped };
