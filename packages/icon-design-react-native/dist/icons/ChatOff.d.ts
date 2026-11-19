import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOff: ForwardRefExoticComponent<ChatOffProps & RefAttributes<Svg>>;

export default ChatOff;
export { ChatOff };
