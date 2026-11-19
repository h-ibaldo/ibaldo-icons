import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCornerFlipped: ForwardRefExoticComponent<ChatStackLockCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackLockCornerFlipped;
export { ChatStackLockCornerFlipped };
