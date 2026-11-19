import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTriangleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTriangleSharp: ForwardRefExoticComponent<ChatTriangleSharpProps & RefAttributes<Svg>>;

export default ChatTriangleSharp;
export { ChatTriangleSharp };
