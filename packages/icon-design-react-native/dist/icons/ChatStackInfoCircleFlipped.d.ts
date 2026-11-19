import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackInfoCircleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoCircleFlipped: ForwardRefExoticComponent<ChatStackInfoCircleFlippedProps & RefAttributes<Svg>>;

export default ChatStackInfoCircleFlipped;
export { ChatStackInfoCircleFlipped };
