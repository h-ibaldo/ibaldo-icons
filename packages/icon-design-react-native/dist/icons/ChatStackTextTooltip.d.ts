import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextTooltip: ForwardRefExoticComponent<ChatStackTextTooltipProps & RefAttributes<Svg>>;

export default ChatStackTextTooltip;
export { ChatStackTextTooltip };
