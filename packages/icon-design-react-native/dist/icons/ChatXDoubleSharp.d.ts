import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXDoubleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleSharp: ForwardRefExoticComponent<ChatXDoubleSharpProps & RefAttributes<Svg>>;

export default ChatXDoubleSharp;
export { ChatXDoubleSharp };
