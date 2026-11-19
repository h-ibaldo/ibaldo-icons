import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSunTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSunTooltip: ForwardRefExoticComponent<ChatStackSunTooltipProps & RefAttributes<Svg>>;

export default ChatStackSunTooltip;
export { ChatStackSunTooltip };
