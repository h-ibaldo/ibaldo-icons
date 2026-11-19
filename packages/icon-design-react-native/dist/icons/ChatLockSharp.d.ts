import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockSharp: ForwardRefExoticComponent<ChatLockSharpProps & RefAttributes<Svg>>;

export default ChatLockSharp;
export { ChatLockSharp };
