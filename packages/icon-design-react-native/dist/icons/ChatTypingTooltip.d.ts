import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTypingTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTypingTooltip: ForwardRefExoticComponent<ChatTypingTooltipProps & RefAttributes<Svg>>;

export default ChatTypingTooltip;
export { ChatTypingTooltip };
