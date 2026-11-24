import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCornerSlant: ForwardRefExoticComponent<ChatStackLockCornerSlantProps & RefAttributes<Svg>>;

export default ChatStackLockCornerSlant;
export { ChatStackLockCornerSlant };
