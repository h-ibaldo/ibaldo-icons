import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSunTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSunTooltip: ForwardRefExoticComponent<ChatSunTooltipProps & RefAttributes<Svg>>;

export default ChatSunTooltip;
export { ChatSunTooltip };
