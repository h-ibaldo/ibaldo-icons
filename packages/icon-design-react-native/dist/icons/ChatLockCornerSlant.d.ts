import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerSlant: ForwardRefExoticComponent<ChatLockCornerSlantProps & RefAttributes<Svg>>;

export default ChatLockCornerSlant;
export { ChatLockCornerSlant };
