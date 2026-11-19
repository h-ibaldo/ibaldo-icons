import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHashNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHashNotch: ForwardRefExoticComponent<ChatStackHashNotchProps & RefAttributes<Svg>>;

export default ChatStackHashNotch;
export { ChatStackHashNotch };
