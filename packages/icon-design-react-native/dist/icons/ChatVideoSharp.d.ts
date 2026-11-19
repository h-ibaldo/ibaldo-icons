import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatVideoSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatVideoSharp: ForwardRefExoticComponent<ChatVideoSharpProps & RefAttributes<Svg>>;

export default ChatVideoSharp;
export { ChatVideoSharp };
