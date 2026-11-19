import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTriangleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTriangleBoxy: ForwardRefExoticComponent<ChatTriangleBoxyProps & RefAttributes<Svg>>;

export default ChatTriangleBoxy;
export { ChatTriangleBoxy };
