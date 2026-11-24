import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTriangleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTriangleSlant: ForwardRefExoticComponent<ChatTriangleSlantProps & RefAttributes<Svg>>;

export default ChatTriangleSlant;
export { ChatTriangleSlant };
