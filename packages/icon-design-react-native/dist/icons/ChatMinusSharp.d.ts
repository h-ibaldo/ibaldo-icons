import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusSharp: ForwardRefExoticComponent<ChatMinusSharpProps & RefAttributes<Svg>>;

export default ChatMinusSharp;
export { ChatMinusSharp };
