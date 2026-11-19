import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackClockSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackClockSlant: ForwardRefExoticComponent<ChatStackClockSlantProps & RefAttributes<Svg>>;

export default ChatStackClockSlant;
export { ChatStackClockSlant };
