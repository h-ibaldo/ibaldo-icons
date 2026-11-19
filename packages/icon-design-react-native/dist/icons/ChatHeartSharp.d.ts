import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHeartSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHeartSharp: ForwardRefExoticComponent<ChatHeartSharpProps & RefAttributes<Svg>>;

export default ChatHeartSharp;
export { ChatHeartSharp };
