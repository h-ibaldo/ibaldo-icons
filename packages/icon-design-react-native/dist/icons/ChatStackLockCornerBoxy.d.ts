import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCornerBoxy: ForwardRefExoticComponent<ChatStackLockCornerBoxyProps & RefAttributes<Svg>>;

export default ChatStackLockCornerBoxy;
export { ChatStackLockCornerBoxy };
