import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEditTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEditTooltip: ForwardRefExoticComponent<ChatEditTooltipProps & RefAttributes<Svg>>;

export default ChatEditTooltip;
export { ChatEditTooltip };
