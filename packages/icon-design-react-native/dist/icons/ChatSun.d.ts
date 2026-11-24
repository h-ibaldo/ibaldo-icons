import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSunProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSun: ForwardRefExoticComponent<ChatSunProps & RefAttributes<Svg>>;

export default ChatSun;
export { ChatSun };
