import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackInfoTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoTooltip: ForwardRefExoticComponent<ChatStackInfoTooltipProps & RefAttributes<Svg>>;

export default ChatStackInfoTooltip;
export { ChatStackInfoTooltip };
