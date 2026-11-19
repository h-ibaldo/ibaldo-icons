import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDollarTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDollarTooltip: ForwardRefExoticComponent<ChatDollarTooltipProps & RefAttributes<Svg>>;

export default ChatDollarTooltip;
export { ChatDollarTooltip };
