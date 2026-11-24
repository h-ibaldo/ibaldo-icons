import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHashSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHashSharp: ForwardRefExoticComponent<ChatHashSharpProps & RefAttributes<Svg>>;

export default ChatHashSharp;
export { ChatHashSharp };
