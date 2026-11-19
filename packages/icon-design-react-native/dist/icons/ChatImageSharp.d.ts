import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatImageSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatImageSharp: ForwardRefExoticComponent<ChatImageSharpProps & RefAttributes<Svg>>;

export default ChatImageSharp;
export { ChatImageSharp };
