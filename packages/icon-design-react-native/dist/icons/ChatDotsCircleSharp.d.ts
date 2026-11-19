import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCircleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleSharp: ForwardRefExoticComponent<ChatDotsCircleSharpProps & RefAttributes<Svg>>;

export default ChatDotsCircleSharp;
export { ChatDotsCircleSharp };
