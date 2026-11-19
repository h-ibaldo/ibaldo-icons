import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyAllTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllTooltip: ForwardRefExoticComponent<ChatReplyAllTooltipProps & RefAttributes<Svg>>;

export default ChatReplyAllTooltip;
export { ChatReplyAllTooltip };
