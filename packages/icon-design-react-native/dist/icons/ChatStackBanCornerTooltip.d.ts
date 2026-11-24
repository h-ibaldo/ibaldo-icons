import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBanCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerTooltip: ForwardRefExoticComponent<ChatStackBanCornerTooltipProps & RefAttributes<Svg>>;

export default ChatStackBanCornerTooltip;
export { ChatStackBanCornerTooltip };
