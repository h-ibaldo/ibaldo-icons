import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCircleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleTooltip: ForwardRefExoticComponent<ChatDotsCircleTooltipProps & RefAttributes<Svg>>;

export default ChatDotsCircleTooltip;
export { ChatDotsCircleTooltip };
