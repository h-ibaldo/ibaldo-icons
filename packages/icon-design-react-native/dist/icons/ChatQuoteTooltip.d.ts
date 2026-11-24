import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuoteTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuoteTooltip: ForwardRefExoticComponent<ChatQuoteTooltipProps & RefAttributes<Svg>>;

export default ChatQuoteTooltip;
export { ChatQuoteTooltip };
