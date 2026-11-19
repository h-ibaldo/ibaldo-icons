import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTriangleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleBoxy: ForwardRefExoticComponent<ChatStackTriangleBoxyProps & RefAttributes<Svg>>;

export default ChatStackTriangleBoxy;
export { ChatStackTriangleBoxy };
