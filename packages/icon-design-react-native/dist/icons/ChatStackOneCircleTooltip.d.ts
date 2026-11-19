import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOneCircleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircleTooltip: ForwardRefExoticComponent<ChatStackOneCircleTooltipProps & RefAttributes<Svg>>;

export default ChatStackOneCircleTooltip;
export { ChatStackOneCircleTooltip };
