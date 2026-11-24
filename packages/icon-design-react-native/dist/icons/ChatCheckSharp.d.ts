import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckSharp: ForwardRefExoticComponent<ChatCheckSharpProps & RefAttributes<Svg>>;

export default ChatCheckSharp;
export { ChatCheckSharp };
