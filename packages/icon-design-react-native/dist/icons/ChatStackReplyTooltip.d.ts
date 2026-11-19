import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyTooltip: ForwardRefExoticComponent<ChatStackReplyTooltipProps & RefAttributes<Svg>>;

export default ChatStackReplyTooltip;
export { ChatStackReplyTooltip };
