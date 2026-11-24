import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardSharp: ForwardRefExoticComponent<ChatForwardSharpProps & RefAttributes<Svg>>;

export default ChatForwardSharp;
export { ChatForwardSharp };
