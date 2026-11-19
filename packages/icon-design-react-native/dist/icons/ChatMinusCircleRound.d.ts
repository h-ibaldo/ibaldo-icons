import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleRound: ForwardRefExoticComponent<ChatMinusCircleRoundProps & RefAttributes<Svg>>;

export default ChatMinusCircleRound;
export { ChatMinusCircleRound };
