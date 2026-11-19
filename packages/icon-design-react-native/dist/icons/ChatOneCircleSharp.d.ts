import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOneCircleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleSharp: ForwardRefExoticComponent<ChatOneCircleSharpProps & RefAttributes<Svg>>;

export default ChatOneCircleSharp;
export { ChatOneCircleSharp };
