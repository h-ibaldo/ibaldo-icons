import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleTooltip: ForwardRefExoticComponent<ChatCheckCircleTooltipProps & RefAttributes<Svg>>;

export default ChatCheckCircleTooltip;
export { ChatCheckCircleTooltip };
