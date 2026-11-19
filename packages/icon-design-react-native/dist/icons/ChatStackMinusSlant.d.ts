import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusSlant: ForwardRefExoticComponent<ChatStackMinusSlantProps & RefAttributes<Svg>>;

export default ChatStackMinusSlant;
export { ChatStackMinusSlant };
