import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackForwardNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardNotch: ForwardRefExoticComponent<ChatStackForwardNotchProps & RefAttributes<Svg>>;

export default ChatStackForwardNotch;
export { ChatStackForwardNotch };
