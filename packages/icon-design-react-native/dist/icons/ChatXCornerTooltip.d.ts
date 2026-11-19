import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCornerTooltip: ForwardRefExoticComponent<ChatXCornerTooltipProps & RefAttributes<Svg>>;

export default ChatXCornerTooltip;
export { ChatXCornerTooltip };
