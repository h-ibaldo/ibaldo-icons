import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardCornerSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardCornerSharp: ForwardRefExoticComponent<ChatForwardCornerSharpProps & RefAttributes<Svg>>;

export default ChatForwardCornerSharp;
export { ChatForwardCornerSharp };
