import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackImageNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackImageNotch: ForwardRefExoticComponent<ChatStackImageNotchProps & RefAttributes<Svg>>;

export default ChatStackImageNotch;
export { ChatStackImageNotch };
