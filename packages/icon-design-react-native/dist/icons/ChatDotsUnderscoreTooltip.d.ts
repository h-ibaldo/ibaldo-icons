import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsUnderscoreTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsUnderscoreTooltip: ForwardRefExoticComponent<ChatDotsUnderscoreTooltipProps & RefAttributes<Svg>>;

export default ChatDotsUnderscoreTooltip;
export { ChatDotsUnderscoreTooltip };
