import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSunProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSun: ForwardRefExoticComponent<ChatStackSunProps & RefAttributes<Svg>>;

export default ChatStackSun;
export { ChatStackSun };
