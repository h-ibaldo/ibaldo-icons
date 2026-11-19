import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusTooltip: ForwardRefExoticComponent<ChatMinusTooltipProps & RefAttributes<Svg>>;

export default ChatMinusTooltip;
export { ChatMinusTooltip };
