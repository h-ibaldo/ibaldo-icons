import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHeartTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHeartTooltip: ForwardRefExoticComponent<ChatHeartTooltipProps & RefAttributes<Svg>>;

export default ChatHeartTooltip;
export { ChatHeartTooltip };
