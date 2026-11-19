import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCircleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircleTooltip: ForwardRefExoticComponent<ChatStackDotsCircleTooltipProps & RefAttributes<Svg>>;

export default ChatStackDotsCircleTooltip;
export { ChatStackDotsCircleTooltip };
