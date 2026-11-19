import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardTooltip: ForwardRefExoticComponent<ChatForwardTooltipProps & RefAttributes<Svg>>;

export default ChatForwardTooltip;
export { ChatForwardTooltip };
