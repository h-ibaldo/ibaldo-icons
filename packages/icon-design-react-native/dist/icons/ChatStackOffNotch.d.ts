import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOffNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOffNotch: ForwardRefExoticComponent<ChatStackOffNotchProps & RefAttributes<Svg>>;

export default ChatStackOffNotch;
export { ChatStackOffNotch };
