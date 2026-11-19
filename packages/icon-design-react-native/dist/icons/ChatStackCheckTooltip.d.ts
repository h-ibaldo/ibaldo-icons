import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckTooltip: ForwardRefExoticComponent<ChatStackCheckTooltipProps & RefAttributes<Svg>>;

export default ChatStackCheckTooltip;
export { ChatStackCheckTooltip };
