import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckTooltip: ForwardRefExoticComponent<ChatCheckTooltipProps & RefAttributes<Svg>>;

export default ChatCheckTooltip;
export { ChatCheckTooltip };
