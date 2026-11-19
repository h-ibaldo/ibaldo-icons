import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatChartSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatChartSlant: ForwardRefExoticComponent<ChatChartSlantProps & RefAttributes<Svg>>;

export default ChatChartSlant;
export { ChatChartSlant };
