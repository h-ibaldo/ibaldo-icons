import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUserRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUserRound: ForwardRefExoticComponent<ChatUserRoundProps & RefAttributes<Svg>>;

export default ChatUserRound;
export { ChatUserRound };
