import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotTooltip: ForwardRefExoticComponent<ChatDotTooltipProps & RefAttributes<Svg>>;

export default ChatDotTooltip;
export { ChatDotTooltip };
