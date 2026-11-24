import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleTooltip: ForwardRefExoticComponent<ChatCheckDoubleTooltipProps & RefAttributes<Svg>>;

export default ChatCheckDoubleTooltip;
export { ChatCheckDoubleTooltip };
