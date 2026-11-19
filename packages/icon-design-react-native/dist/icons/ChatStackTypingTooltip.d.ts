import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTypingTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingTooltip: ForwardRefExoticComponent<ChatStackTypingTooltipProps & RefAttributes<Svg>>;

export default ChatStackTypingTooltip;
export { ChatStackTypingTooltip };
