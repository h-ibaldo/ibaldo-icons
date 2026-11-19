import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHashTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHashTooltip: ForwardRefExoticComponent<ChatHashTooltipProps & RefAttributes<Svg>>;

export default ChatHashTooltip;
export { ChatHashTooltip };
