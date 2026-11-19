import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfoTooltip: ForwardRefExoticComponent<ChatInfoTooltipProps & RefAttributes<Svg>>;

export default ChatInfoTooltip;
export { ChatInfoTooltip };
