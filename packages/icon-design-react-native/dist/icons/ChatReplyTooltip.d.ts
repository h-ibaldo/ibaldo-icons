import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyTooltip: ForwardRefExoticComponent<ChatReplyTooltipProps & RefAttributes<Svg>>;

export default ChatReplyTooltip;
export { ChatReplyTooltip };
