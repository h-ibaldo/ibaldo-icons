import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackClockBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackClockBroken: ForwardRefExoticComponent<ChatStackClockBrokenProps & RefAttributes<Svg>>;

export default ChatStackClockBroken;
export { ChatStackClockBroken };
