import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOneCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleRound: ForwardRefExoticComponent<ChatOneCircleRoundProps & RefAttributes<Svg>>;

export default ChatOneCircleRound;
export { ChatOneCircleRound };
