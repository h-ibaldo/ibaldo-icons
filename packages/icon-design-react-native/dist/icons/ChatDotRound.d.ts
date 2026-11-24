import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotRound: ForwardRefExoticComponent<ChatDotRoundProps & RefAttributes<Svg>>;

export default ChatDotRound;
export { ChatDotRound };
