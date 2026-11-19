import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCursorSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursorSharp: ForwardRefExoticComponent<ChatDotsCursorSharpProps & RefAttributes<Svg>>;

export default ChatDotsCursorSharp;
export { ChatDotsCursorSharp };
