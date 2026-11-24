import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStarCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStarCornerTooltip: ForwardRefExoticComponent<ChatStarCornerTooltipProps & RefAttributes<Svg>>;

export default ChatStarCornerTooltip;
export { ChatStarCornerTooltip };
