import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatClock: ForwardRefExoticComponent<ChatClockProps & RefAttributes<Svg>>;

export default ChatClock;
export { ChatClock };
