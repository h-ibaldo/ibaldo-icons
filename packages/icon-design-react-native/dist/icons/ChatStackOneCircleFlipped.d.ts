import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOneCircleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircleFlipped: ForwardRefExoticComponent<ChatStackOneCircleFlippedProps & RefAttributes<Svg>>;

export default ChatStackOneCircleFlipped;
export { ChatStackOneCircleFlipped };
