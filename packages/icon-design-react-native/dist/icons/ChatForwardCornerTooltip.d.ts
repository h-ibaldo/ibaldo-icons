import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardCornerTooltip: ForwardRefExoticComponent<ChatForwardCornerTooltipProps & RefAttributes<Svg>>;

export default ChatForwardCornerTooltip;
export { ChatForwardCornerTooltip };
