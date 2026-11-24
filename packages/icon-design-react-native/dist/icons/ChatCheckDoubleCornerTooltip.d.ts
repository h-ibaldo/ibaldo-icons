import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCornerTooltip: ForwardRefExoticComponent<ChatCheckDoubleCornerTooltipProps & RefAttributes<Svg>>;

export default ChatCheckDoubleCornerTooltip;
export { ChatCheckDoubleCornerTooltip };
