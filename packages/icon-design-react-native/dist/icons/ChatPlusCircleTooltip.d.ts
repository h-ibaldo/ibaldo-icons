import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCircleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleTooltip: ForwardRefExoticComponent<ChatPlusCircleTooltipProps & RefAttributes<Svg>>;

export default ChatPlusCircleTooltip;
export { ChatPlusCircleTooltip };
