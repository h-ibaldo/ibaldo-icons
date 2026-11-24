import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDollarSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDollarSharp: ForwardRefExoticComponent<ChatDollarSharpProps & RefAttributes<Svg>>;

export default ChatDollarSharp;
export { ChatDollarSharp };
