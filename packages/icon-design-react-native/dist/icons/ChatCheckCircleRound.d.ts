import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleRound: ForwardRefExoticComponent<ChatCheckCircleRoundProps & RefAttributes<Svg>>;

export default ChatCheckCircleRound;
export { ChatCheckCircleRound };
