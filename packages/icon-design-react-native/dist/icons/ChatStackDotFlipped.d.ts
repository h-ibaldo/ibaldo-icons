import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotFlipped: ForwardRefExoticComponent<ChatStackDotFlippedProps & RefAttributes<Svg>>;

export default ChatStackDotFlipped;
export { ChatStackDotFlipped };
