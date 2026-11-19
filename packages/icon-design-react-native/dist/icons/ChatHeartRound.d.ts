import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHeartRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHeartRound: ForwardRefExoticComponent<ChatHeartRoundProps & RefAttributes<Svg>>;

export default ChatHeartRound;
export { ChatHeartRound };
