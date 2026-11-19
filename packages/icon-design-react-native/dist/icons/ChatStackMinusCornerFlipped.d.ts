import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusCornerFlipped: ForwardRefExoticComponent<ChatStackMinusCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackMinusCornerFlipped;
export { ChatStackMinusCornerFlipped };
