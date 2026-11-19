import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUnderlineTypingTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineTypingTooltip: ForwardRefExoticComponent<ChatUnderlineTypingTooltipProps & RefAttributes<Svg>>;

export default ChatUnderlineTypingTooltip;
export { ChatUnderlineTypingTooltip };
