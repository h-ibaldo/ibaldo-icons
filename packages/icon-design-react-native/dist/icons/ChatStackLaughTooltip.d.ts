import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLaughTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLaughTooltip: ForwardRefExoticComponent<ChatStackLaughTooltipProps & RefAttributes<Svg>>;

export default ChatStackLaughTooltip;
export { ChatStackLaughTooltip };
