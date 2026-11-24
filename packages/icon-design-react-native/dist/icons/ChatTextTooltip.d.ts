import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextTooltip: ForwardRefExoticComponent<ChatTextTooltipProps & RefAttributes<Svg>>;

export default ChatTextTooltip;
export { ChatTextTooltip };
