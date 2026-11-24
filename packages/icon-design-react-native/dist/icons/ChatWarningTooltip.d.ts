import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWarningTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWarningTooltip: ForwardRefExoticComponent<ChatWarningTooltipProps & RefAttributes<Svg>>;

export default ChatWarningTooltip;
export { ChatWarningTooltip };
