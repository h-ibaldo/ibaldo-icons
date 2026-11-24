import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCornerBroken: ForwardRefExoticComponent<ChatStackLockCornerBrokenProps & RefAttributes<Svg>>;

export default ChatStackLockCornerBroken;
export { ChatStackLockCornerBroken };
