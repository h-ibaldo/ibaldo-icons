import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLettersSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLettersSharp: ForwardRefExoticComponent<ChatLettersSharpProps & RefAttributes<Svg>>;

export default ChatLettersSharp;
export { ChatLettersSharp };
