import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLock: ForwardRefExoticComponent<ChatLockProps & RefAttributes<Svg>>;

export default ChatLock;
export { ChatLock };
