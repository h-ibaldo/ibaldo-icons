import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackClockFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackClockFlipped: ForwardRefExoticComponent<ChatStackClockFlippedProps & RefAttributes<Svg>>;

export default ChatStackClockFlipped;
export { ChatStackClockFlipped };
