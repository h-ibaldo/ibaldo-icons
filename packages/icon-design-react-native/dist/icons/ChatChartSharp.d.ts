import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatChartSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatChartSharp: ForwardRefExoticComponent<ChatChartSharpProps & RefAttributes<Svg>>;

export default ChatChartSharp;
export { ChatChartSharp };
