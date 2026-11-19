import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusRound: ForwardRefExoticComponent<ChatMinusRoundProps & RefAttributes<Svg>>;

export default ChatMinusRound;
export { ChatMinusRound };
