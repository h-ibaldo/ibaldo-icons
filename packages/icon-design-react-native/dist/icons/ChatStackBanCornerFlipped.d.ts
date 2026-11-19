import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBanCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerFlipped: ForwardRefExoticComponent<ChatStackBanCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackBanCornerFlipped;
export { ChatStackBanCornerFlipped };
