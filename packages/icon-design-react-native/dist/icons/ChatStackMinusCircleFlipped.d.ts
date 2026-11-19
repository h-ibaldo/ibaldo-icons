import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusCircleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusCircleFlipped: ForwardRefExoticComponent<ChatStackMinusCircleFlippedProps & RefAttributes<Svg>>;

export default ChatStackMinusCircleFlipped;
export { ChatStackMinusCircleFlipped };
