import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerTooltip: ForwardRefExoticComponent<ChatMinusCornerTooltipProps & RefAttributes<Svg>>;

export default ChatMinusCornerTooltip;
export { ChatMinusCornerTooltip };
