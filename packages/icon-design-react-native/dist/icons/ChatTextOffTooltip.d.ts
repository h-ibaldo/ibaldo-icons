import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextOffTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextOffTooltip: ForwardRefExoticComponent<ChatTextOffTooltipProps & RefAttributes<Svg>>;

export default ChatTextOffTooltip;
export { ChatTextOffTooltip };
