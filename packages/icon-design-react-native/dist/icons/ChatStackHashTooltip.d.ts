import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHashTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHashTooltip: ForwardRefExoticComponent<ChatStackHashTooltipProps & RefAttributes<Svg>>;

export default ChatStackHashTooltip;
export { ChatStackHashTooltip };
