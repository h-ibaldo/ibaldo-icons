import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHappyNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHappyNotch: ForwardRefExoticComponent<ChatStackHappyNotchProps & RefAttributes<Svg>>;

export default ChatStackHappyNotch;
export { ChatStackHappyNotch };
