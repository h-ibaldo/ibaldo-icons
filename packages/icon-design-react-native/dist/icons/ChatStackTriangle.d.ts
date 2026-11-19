import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangle: ForwardRefExoticComponent<ChatStackTriangleProps & RefAttributes<Svg>>;

export default ChatStackTriangle;
export { ChatStackTriangle };
