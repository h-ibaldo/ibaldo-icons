import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCircleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircleFlipped: ForwardRefExoticComponent<ChatStackDotsCircleFlippedProps & RefAttributes<Svg>>;

export default ChatStackDotsCircleFlipped;
export { ChatStackDotsCircleFlipped };
