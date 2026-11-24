import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOffFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOffFlipped: ForwardRefExoticComponent<ChatStackOffFlippedProps & RefAttributes<Svg>>;

export default ChatStackOffFlipped;
export { ChatStackOffFlipped };
