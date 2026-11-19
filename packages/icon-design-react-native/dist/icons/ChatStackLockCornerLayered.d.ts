import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockCornerLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCornerLayered: ForwardRefExoticComponent<ChatStackLockCornerLayeredProps & RefAttributes<Svg>>;

export default ChatStackLockCornerLayered;
export { ChatStackLockCornerLayered };
