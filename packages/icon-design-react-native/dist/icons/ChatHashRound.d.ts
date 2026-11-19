import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHashRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHashRound: ForwardRefExoticComponent<ChatHashRoundProps & RefAttributes<Svg>>;

export default ChatHashRound;
export { ChatHashRound };
