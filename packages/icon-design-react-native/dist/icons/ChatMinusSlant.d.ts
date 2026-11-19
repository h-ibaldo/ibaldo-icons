import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusSlant: ForwardRefExoticComponent<ChatMinusSlantProps & RefAttributes<Svg>>;

export default ChatMinusSlant;
export { ChatMinusSlant };
