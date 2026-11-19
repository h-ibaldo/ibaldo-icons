import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEqualsSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEqualsSharp: ForwardRefExoticComponent<ChatEqualsSharpProps & RefAttributes<Svg>>;

export default ChatEqualsSharp;
export { ChatEqualsSharp };
