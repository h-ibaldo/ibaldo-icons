import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCornerSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerSharp: ForwardRefExoticComponent<ChatCheckCornerSharpProps & RefAttributes<Svg>>;

export default ChatCheckCornerSharp;
export { ChatCheckCornerSharp };
