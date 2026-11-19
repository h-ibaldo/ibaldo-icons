import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsRound: ForwardRefExoticComponent<ChatDotsRoundProps & RefAttributes<Svg>>;

export default ChatDotsRound;
export { ChatDotsRound };
