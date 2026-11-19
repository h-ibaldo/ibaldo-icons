import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSharp: ForwardRefExoticComponent<ChatSharpProps & RefAttributes<Svg>>;

export default ChatSharp;
export { ChatSharp };
