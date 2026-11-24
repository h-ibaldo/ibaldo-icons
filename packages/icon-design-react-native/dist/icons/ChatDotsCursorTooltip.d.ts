import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCursorTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursorTooltip: ForwardRefExoticComponent<ChatDotsCursorTooltipProps & RefAttributes<Svg>>;

export default ChatDotsCursorTooltip;
export { ChatDotsCursorTooltip };
