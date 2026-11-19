import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatChartRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatChartRound: ForwardRefExoticComponent<ChatChartRoundProps & RefAttributes<Svg>>;

export default ChatChartRound;
export { ChatChartRound };
