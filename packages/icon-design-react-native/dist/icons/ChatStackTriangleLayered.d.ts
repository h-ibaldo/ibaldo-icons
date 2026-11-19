import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTriangleLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleLayered: ForwardRefExoticComponent<ChatStackTriangleLayeredProps & RefAttributes<Svg>>;

export default ChatStackTriangleLayered;
export { ChatStackTriangleLayered };
