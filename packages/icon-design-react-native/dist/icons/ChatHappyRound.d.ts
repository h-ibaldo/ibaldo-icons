import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHappyRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHappyRound: ForwardRefExoticComponent<ChatHappyRoundProps & RefAttributes<Svg>>;

export default ChatHappyRound;
export { ChatHappyRound };
