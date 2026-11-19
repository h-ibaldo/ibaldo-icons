import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatChartBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatChartBroken: ForwardRefExoticComponent<ChatChartBrokenProps & RefAttributes<Svg>>;

export default ChatChartBroken;
export { ChatChartBroken };
