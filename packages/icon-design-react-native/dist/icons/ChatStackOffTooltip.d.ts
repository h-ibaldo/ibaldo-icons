import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOffTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOffTooltip: ForwardRefExoticComponent<ChatStackOffTooltipProps & RefAttributes<Svg>>;

export default ChatStackOffTooltip;
export { ChatStackOffTooltip };
