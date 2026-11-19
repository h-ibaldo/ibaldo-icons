import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTriangleNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleNotch: ForwardRefExoticComponent<ChatStackTriangleNotchProps & RefAttributes<Svg>>;

export default ChatStackTriangleNotch;
export { ChatStackTriangleNotch };
