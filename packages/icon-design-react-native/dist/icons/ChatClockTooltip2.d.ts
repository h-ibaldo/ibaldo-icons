import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatClockTooltip2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatClockTooltip2: ForwardRefExoticComponent<ChatClockTooltip2Props & RefAttributes<Svg>>;

export default ChatClockTooltip2;
export { ChatClockTooltip2 };
