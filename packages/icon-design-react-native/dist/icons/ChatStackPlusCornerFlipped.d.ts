import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackPlusCornerFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusCornerFlipped: ForwardRefExoticComponent<ChatStackPlusCornerFlippedProps & RefAttributes<Svg>>;

export default ChatStackPlusCornerFlipped;
export { ChatStackPlusCornerFlipped };
