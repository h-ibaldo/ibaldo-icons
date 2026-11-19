import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartCornerFlipped: ForwardRefExoticComponent<ChatStackHeartCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackHeartCornerFlipped;
export { ChatStackHeartCornerFlipped };
