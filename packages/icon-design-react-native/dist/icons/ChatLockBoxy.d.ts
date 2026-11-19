import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockBoxy: ForwardRefExoticComponent<ChatLockBoxyProps & RefAttributes<Svg>>;

export default ChatLockBoxy;
export { ChatLockBoxy };
