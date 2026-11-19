import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleSharp: ForwardRefExoticComponent<ChatCheckCircleSharpProps & RefAttributes<Svg>>;

export default ChatCheckCircleSharp;
export { ChatCheckCircleSharp };
