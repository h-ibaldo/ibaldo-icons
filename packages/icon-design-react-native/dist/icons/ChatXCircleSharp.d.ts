import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircleSharp: ForwardRefExoticComponent<ChatXCircleSharpProps & RefAttributes<Svg>>;

export default ChatXCircleSharp;
export { ChatXCircleSharp };
