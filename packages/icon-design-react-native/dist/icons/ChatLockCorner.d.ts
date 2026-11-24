import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockCorner: ForwardRefExoticComponent<ChatLockCornerProps & RefAttributes<Svg>>;

export default ChatLockCorner;
export { ChatLockCorner };
