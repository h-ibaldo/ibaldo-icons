import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXCornerFlipped: ForwardRefExoticComponent<ChatStackXCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackXCornerFlipped;
export { ChatStackXCornerFlipped };
