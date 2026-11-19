import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckDoubleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckDoubleTooltip: ForwardRefExoticComponent<ChatStackCheckDoubleTooltipProps & RefAttributes<Svg>>;

export default ChatStackCheckDoubleTooltip;
export { ChatStackCheckDoubleTooltip };
