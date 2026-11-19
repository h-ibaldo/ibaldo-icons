import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCursorTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCursorTooltip: ForwardRefExoticComponent<ChatStackDotsCursorTooltipProps & RefAttributes<Svg>>;

export default ChatStackDotsCursorTooltip;
export { ChatStackDotsCursorTooltip };
