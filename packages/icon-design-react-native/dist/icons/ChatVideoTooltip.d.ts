import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatVideoTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatVideoTooltip: ForwardRefExoticComponent<ChatVideoTooltipProps & RefAttributes<Svg>>;

export default ChatVideoTooltip;
export { ChatVideoTooltip };
