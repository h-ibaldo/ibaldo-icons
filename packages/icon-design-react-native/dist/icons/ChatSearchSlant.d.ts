import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSearchSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSearchSlant: ForwardRefExoticComponent<ChatSearchSlantProps & RefAttributes<Svg>>;

export default ChatSearchSlant;
export { ChatSearchSlant };
