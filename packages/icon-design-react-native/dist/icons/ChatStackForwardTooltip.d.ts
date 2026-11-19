import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackForwardTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardTooltip: ForwardRefExoticComponent<ChatStackForwardTooltipProps & RefAttributes<Svg>>;

export default ChatStackForwardTooltip;
export { ChatStackForwardTooltip };
