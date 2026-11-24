import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatClockRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatClockRound: ForwardRefExoticComponent<ChatClockRoundProps & RefAttributes<Svg>>;

export default ChatClockRound;
export { ChatClockRound };
