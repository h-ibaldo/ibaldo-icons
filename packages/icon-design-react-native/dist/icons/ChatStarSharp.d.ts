import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStarSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStarSharp: ForwardRefExoticComponent<ChatStarSharpProps & RefAttributes<Svg>>;

export default ChatStarSharp;
export { ChatStarSharp };
