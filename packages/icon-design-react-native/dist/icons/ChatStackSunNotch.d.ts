import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSunNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSunNotch: ForwardRefExoticComponent<ChatStackSunNotchProps & RefAttributes<Svg>>;

export default ChatStackSunNotch;
export { ChatStackSunNotch };
