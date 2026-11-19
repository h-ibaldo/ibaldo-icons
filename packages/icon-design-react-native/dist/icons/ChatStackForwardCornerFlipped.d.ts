import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackForwardCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardCornerFlipped: ForwardRefExoticComponent<ChatStackForwardCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackForwardCornerFlipped;
export { ChatStackForwardCornerFlipped };
