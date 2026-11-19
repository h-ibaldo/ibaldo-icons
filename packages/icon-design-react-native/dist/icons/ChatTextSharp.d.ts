import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextSharp: ForwardRefExoticComponent<ChatTextSharpProps & RefAttributes<Svg>>;

export default ChatTextSharp;
export { ChatTextSharp };
