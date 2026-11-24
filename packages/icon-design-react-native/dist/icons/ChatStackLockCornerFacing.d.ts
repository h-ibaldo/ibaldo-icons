import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockCornerFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCornerFacing: ForwardRefExoticComponent<ChatStackLockCornerFacingProps & RefAttributes<Svg>>;

export default ChatStackLockCornerFacing;
export { ChatStackLockCornerFacing };
