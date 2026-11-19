import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerRound: ForwardRefExoticComponent<ChatLockCornerRoundProps & RefAttributes<Svg>>;

export default ChatLockCornerRound;
export { ChatLockCornerRound };
