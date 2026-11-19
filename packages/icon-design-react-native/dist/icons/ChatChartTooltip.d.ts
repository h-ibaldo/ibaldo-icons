import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatChartTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatChartTooltip: ForwardRefExoticComponent<ChatChartTooltipProps & RefAttributes<Svg>>;

export default ChatChartTooltip;
export { ChatChartTooltip };
