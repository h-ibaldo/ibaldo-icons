import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXDoubleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXDoubleTooltip: ForwardRefExoticComponent<ChatStackXDoubleTooltipProps & RefAttributes<Svg>>;

export default ChatStackXDoubleTooltip;
export { ChatStackXDoubleTooltip };
