import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUserTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUserTooltip: ForwardRefExoticComponent<ChatUserTooltipProps & RefAttributes<Svg>>;

export default ChatUserTooltip;
export { ChatUserTooltip };
