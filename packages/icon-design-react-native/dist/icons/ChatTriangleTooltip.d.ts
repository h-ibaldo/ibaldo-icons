import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTriangleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTriangleTooltip: ForwardRefExoticComponent<ChatTriangleTooltipProps & RefAttributes<Svg>>;

export default ChatTriangleTooltip;
export { ChatTriangleTooltip };
