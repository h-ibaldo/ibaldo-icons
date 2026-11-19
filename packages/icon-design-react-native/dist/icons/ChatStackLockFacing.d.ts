import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockFacing: ForwardRefExoticComponent<ChatStackLockFacingProps & RefAttributes<Svg>>;

export default ChatStackLockFacing;
export { ChatStackLockFacing };
