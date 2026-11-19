import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTooltip: ForwardRefExoticComponent<ChatStackTooltipProps & RefAttributes<Svg>>;

export default ChatStackTooltip;
export { ChatStackTooltip };
