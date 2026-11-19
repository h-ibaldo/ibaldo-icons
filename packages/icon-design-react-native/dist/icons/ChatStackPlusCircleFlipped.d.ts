import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackPlusCircleFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusCircleFlipped: ForwardRefExoticComponent<ChatStackPlusCircleFlippedProps & RefAttributes<Svg>>;

export default ChatStackPlusCircleFlipped;
export { ChatStackPlusCircleFlipped };
