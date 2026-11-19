import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsTooltip: ForwardRefExoticComponent<ChatDotsTooltipProps & RefAttributes<Svg>>;

export default ChatDotsTooltip;
export { ChatDotsTooltip };
