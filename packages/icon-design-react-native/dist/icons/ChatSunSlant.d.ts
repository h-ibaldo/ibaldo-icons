import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSunSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSunSlant: ForwardRefExoticComponent<ChatSunSlantProps & RefAttributes<Svg>>;

export default ChatSunSlant;
export { ChatSunSlant };
