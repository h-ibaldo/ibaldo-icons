import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatListTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatListTooltip: ForwardRefExoticComponent<ChatListTooltipProps & RefAttributes<Svg>>;

export default ChatListTooltip;
export { ChatListTooltip };
