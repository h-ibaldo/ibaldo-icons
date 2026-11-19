import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsTooltip: ForwardRefExoticComponent<ChatStackDotsTooltipProps & RefAttributes<Svg>>;

export default ChatStackDotsTooltip;
export { ChatStackDotsTooltip };
