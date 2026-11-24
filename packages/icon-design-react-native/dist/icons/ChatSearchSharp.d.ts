import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSearchSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSearchSharp: ForwardRefExoticComponent<ChatSearchSharpProps & RefAttributes<Svg>>;

export default ChatSearchSharp;
export { ChatSearchSharp };
