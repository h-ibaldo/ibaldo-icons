import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTooltip: ForwardRefExoticComponent<ChatTooltipProps & RefAttributes<Svg>>;

export default ChatTooltip;
export { ChatTooltip };
