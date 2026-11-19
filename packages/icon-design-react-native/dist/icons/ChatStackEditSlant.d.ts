import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackEditSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackEditSlant: ForwardRefExoticComponent<ChatStackEditSlantProps & RefAttributes<Svg>>;

export default ChatStackEditSlant;
export { ChatStackEditSlant };
