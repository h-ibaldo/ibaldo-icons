import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalTooltip: ForwardRefExoticComponent<ChatDotsVerticalTooltipProps & RefAttributes<Svg>>;

export default ChatDotsVerticalTooltip;
export { ChatDotsVerticalTooltip };
