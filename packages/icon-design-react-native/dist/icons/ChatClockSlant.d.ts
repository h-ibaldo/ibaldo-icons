import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatClockSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatClockSlant: ForwardRefExoticComponent<ChatClockSlantProps & RefAttributes<Svg>>;

export default ChatClockSlant;
export { ChatClockSlant };
