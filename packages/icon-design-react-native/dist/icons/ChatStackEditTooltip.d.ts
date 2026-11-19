import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackEditTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackEditTooltip: ForwardRefExoticComponent<ChatStackEditTooltipProps & RefAttributes<Svg>>;

export default ChatStackEditTooltip;
export { ChatStackEditTooltip };
