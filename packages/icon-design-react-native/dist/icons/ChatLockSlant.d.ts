import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockSlant: ForwardRefExoticComponent<ChatLockSlantProps & RefAttributes<Svg>>;

export default ChatLockSlant;
export { ChatLockSlant };
