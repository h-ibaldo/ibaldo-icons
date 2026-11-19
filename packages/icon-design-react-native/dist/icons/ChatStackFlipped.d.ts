import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackFlipped: ForwardRefExoticComponent<ChatStackFlippedProps & RefAttributes<Svg>>;

export default ChatStackFlipped;
export { ChatStackFlipped };
