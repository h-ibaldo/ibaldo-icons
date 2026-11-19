import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackUnderlineTypingTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTypingTooltip: ForwardRefExoticComponent<ChatStackUnderlineTypingTooltipProps & RefAttributes<Svg>>;

export default ChatStackUnderlineTypingTooltip;
export { ChatStackUnderlineTypingTooltip };
