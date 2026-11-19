import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerTooltip: ForwardRefExoticComponent<ChatPlusCornerTooltipProps & RefAttributes<Svg>>;

export default ChatPlusCornerTooltip;
export { ChatPlusCornerTooltip };
