import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerBoxy: ForwardRefExoticComponent<ChatLockCornerBoxyProps & RefAttributes<Svg>>;

export default ChatLockCornerBoxy;
export { ChatLockCornerBoxy };
