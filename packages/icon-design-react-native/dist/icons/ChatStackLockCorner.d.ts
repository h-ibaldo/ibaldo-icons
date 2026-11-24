import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCorner: ForwardRefExoticComponent<ChatStackLockCornerProps & RefAttributes<Svg>>;

export default ChatStackLockCorner;
export { ChatStackLockCorner };
