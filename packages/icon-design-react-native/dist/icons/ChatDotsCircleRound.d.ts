import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleRound: ForwardRefExoticComponent<ChatDotsCircleRoundProps & RefAttributes<Svg>>;

export default ChatDotsCircleRound;
export { ChatDotsCircleRound };
