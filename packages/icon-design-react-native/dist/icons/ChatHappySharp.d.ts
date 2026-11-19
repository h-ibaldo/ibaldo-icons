import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHappySharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHappySharp: ForwardRefExoticComponent<ChatHappySharpProps & RefAttributes<Svg>>;

export default ChatHappySharp;
export { ChatHappySharp };
