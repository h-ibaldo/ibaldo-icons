import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleSharp: ForwardRefExoticComponent<ChatCheckDoubleSharpProps & RefAttributes<Svg>>;

export default ChatCheckDoubleSharp;
export { ChatCheckDoubleSharp };
