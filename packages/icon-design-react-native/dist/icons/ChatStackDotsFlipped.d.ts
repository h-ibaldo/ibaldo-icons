import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsFlipped: ForwardRefExoticComponent<ChatStackDotsFlippedProps & RefAttributes<Svg>>;

export default ChatStackDotsFlipped;
export { ChatStackDotsFlipped };
