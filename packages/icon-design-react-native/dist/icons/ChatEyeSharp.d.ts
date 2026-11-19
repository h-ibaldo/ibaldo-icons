import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEyeSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEyeSharp: ForwardRefExoticComponent<ChatEyeSharpProps & RefAttributes<Svg>>;

export default ChatEyeSharp;
export { ChatEyeSharp };
