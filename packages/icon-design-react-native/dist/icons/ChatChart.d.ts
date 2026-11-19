import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatChartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatChart: ForwardRefExoticComponent<ChatChartProps & RefAttributes<Svg>>;

export default ChatChart;
export { ChatChart };
