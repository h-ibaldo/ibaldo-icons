import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsVerticalTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsVerticalTooltip: ForwardRefExoticComponent<ChatStackDotsVerticalTooltipProps & RefAttributes<Svg>>;

export default ChatStackDotsVerticalTooltip;
export { ChatStackDotsVerticalTooltip };
