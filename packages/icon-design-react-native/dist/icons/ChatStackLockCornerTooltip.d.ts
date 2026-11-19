import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLockCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCornerTooltip: ForwardRefExoticComponent<ChatStackLockCornerTooltipProps & RefAttributes<Svg>>;

export default ChatStackLockCornerTooltip;
export { ChatStackLockCornerTooltip };
