import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSlant: ForwardRefExoticComponent<ChatSlantProps & RefAttributes<Svg>>;

export default ChatSlant;
export { ChatSlant };
