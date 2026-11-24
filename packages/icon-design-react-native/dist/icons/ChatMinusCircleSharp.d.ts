import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleSharp: ForwardRefExoticComponent<ChatMinusCircleSharpProps & RefAttributes<Svg>>;

export default ChatMinusCircleSharp;
export { ChatMinusCircleSharp };
