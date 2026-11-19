import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatImageTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatImageTooltip: ForwardRefExoticComponent<ChatImageTooltipProps & RefAttributes<Svg>>;

export default ChatImageTooltip;
export { ChatImageTooltip };
