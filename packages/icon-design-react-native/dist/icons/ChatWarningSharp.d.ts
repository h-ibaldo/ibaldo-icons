import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWarningSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWarningSharp: ForwardRefExoticComponent<ChatWarningSharpProps & RefAttributes<Svg>>;

export default ChatWarningSharp;
export { ChatWarningSharp };
