import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackInfoNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoNotch: ForwardRefExoticComponent<ChatStackInfoNotchProps & RefAttributes<Svg>>;

export default ChatStackInfoNotch;
export { ChatStackInfoNotch };
