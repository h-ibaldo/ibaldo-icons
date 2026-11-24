import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSearchTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSearchTooltip: ForwardRefExoticComponent<ChatSearchTooltipProps & RefAttributes<Svg>>;

export default ChatSearchTooltip;
export { ChatSearchTooltip };
