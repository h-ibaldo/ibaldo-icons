import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOffTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOffTooltip: ForwardRefExoticComponent<ChatOffTooltipProps & RefAttributes<Svg>>;

export default ChatOffTooltip;
export { ChatOffTooltip };
