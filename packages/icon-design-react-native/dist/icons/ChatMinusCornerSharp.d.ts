import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCornerSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerSharp: ForwardRefExoticComponent<ChatMinusCornerSharpProps & RefAttributes<Svg>>;

export default ChatMinusCornerSharp;
export { ChatMinusCornerSharp };
