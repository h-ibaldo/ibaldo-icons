import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleCornerSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCornerSharp: ForwardRefExoticComponent<ChatCheckDoubleCornerSharpProps & RefAttributes<Svg>>;

export default ChatCheckDoubleCornerSharp;
export { ChatCheckDoubleCornerSharp };
