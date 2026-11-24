import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleTooltip: ForwardRefExoticComponent<ChatMinusCircleTooltipProps & RefAttributes<Svg>>;

export default ChatMinusCircleTooltip;
export { ChatMinusCircleTooltip };
