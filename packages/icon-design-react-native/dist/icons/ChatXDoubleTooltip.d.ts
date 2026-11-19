import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXDoubleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleTooltip: ForwardRefExoticComponent<ChatXDoubleTooltipProps & RefAttributes<Svg>>;

export default ChatXDoubleTooltip;
export { ChatXDoubleTooltip };
