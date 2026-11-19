import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEditSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEditSharp: ForwardRefExoticComponent<ChatEditSharpProps & RefAttributes<Svg>>;

export default ChatEditSharp;
export { ChatEditSharp };
