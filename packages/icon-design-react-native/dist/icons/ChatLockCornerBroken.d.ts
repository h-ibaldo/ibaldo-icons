import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerBroken: ForwardRefExoticComponent<ChatLockCornerBrokenProps & RefAttributes<Svg>>;

export default ChatLockCornerBroken;
export { ChatLockCornerBroken };
