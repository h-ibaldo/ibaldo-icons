import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockCornerTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerTooltip: ForwardRefExoticComponent<ChatLockCornerTooltipProps & RefAttributes<Svg>>;

export default ChatLockCornerTooltip;
export { ChatLockCornerTooltip };
