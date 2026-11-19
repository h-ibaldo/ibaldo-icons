import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTriangleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleSlant: ForwardRefExoticComponent<ChatStackTriangleSlantProps & RefAttributes<Svg>>;

export default ChatStackTriangleSlant;
export { ChatStackTriangleSlant };
