import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTriangleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleTooltip: ForwardRefExoticComponent<ChatStackTriangleTooltipProps & RefAttributes<Svg>>;

export default ChatStackTriangleTooltip;
export { ChatStackTriangleTooltip };
