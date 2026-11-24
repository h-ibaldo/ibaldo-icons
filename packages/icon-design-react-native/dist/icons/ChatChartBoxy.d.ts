import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatChartBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatChartBoxy: ForwardRefExoticComponent<ChatChartBoxyProps & RefAttributes<Svg>>;

export default ChatChartBoxy;
export { ChatChartBoxy };
