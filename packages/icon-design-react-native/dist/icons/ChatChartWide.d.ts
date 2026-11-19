import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatChartWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatChartWide: ForwardRefExoticComponent<ChatChartWideProps & RefAttributes<Svg>>;

export default ChatChartWide;
export { ChatChartWide };
