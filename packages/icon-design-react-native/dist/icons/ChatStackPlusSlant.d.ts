import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackPlusSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusSlant: ForwardRefExoticComponent<ChatStackPlusSlantProps & RefAttributes<Svg>>;

export default ChatStackPlusSlant;
export { ChatStackPlusSlant };
