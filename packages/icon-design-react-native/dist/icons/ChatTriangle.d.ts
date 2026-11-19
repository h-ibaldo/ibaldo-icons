import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTriangle: ForwardRefExoticComponent<ChatTriangleProps & RefAttributes<Svg>>;

export default ChatTriangle;
export { ChatTriangle };
