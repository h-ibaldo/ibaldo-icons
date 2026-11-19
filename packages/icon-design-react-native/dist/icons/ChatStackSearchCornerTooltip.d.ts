import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSearchCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCornerTooltip: ForwardRefExoticComponent<ChatStackSearchCornerTooltipProps & RefAttributes<Svg>>;

export default ChatStackSearchCornerTooltip;
export { ChatStackSearchCornerTooltip };
