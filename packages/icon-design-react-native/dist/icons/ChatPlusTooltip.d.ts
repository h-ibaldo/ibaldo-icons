import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusTooltip: ForwardRefExoticComponent<ChatPlusTooltipProps & RefAttributes<Svg>>;

export default ChatPlusTooltip;
export { ChatPlusTooltip };
