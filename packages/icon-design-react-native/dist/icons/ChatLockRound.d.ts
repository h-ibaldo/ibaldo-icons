import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockRound: ForwardRefExoticComponent<ChatLockRoundProps & RefAttributes<Svg>>;

export default ChatLockRound;
export { ChatLockRound };
