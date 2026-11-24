import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartCornerTooltip: ForwardRefExoticComponent<ChatStackHeartCornerTooltipProps & RefAttributes<Svg>>;

export default ChatStackHeartCornerTooltip;
export { ChatStackHeartCornerTooltip };
