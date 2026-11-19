import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusDoubleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusDoubleFlipped: ForwardRefExoticComponent<ChatStackMinusDoubleFlippedProps & RefAttributes<Svg>>;

export default ChatStackMinusDoubleFlipped;
export { ChatStackMinusDoubleFlipped };
