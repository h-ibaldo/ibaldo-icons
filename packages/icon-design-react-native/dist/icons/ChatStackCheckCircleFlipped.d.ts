import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckCircleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckCircleFlipped: ForwardRefExoticComponent<ChatStackCheckCircleFlippedProps & RefAttributes<Svg>>;

export default ChatStackCheckCircleFlipped;
export { ChatStackCheckCircleFlipped };
