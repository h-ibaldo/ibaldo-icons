import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackClock: ForwardRefExoticComponent<ChatStackClockProps & RefAttributes<Svg>>;

export default ChatStackClock;
export { ChatStackClock };
