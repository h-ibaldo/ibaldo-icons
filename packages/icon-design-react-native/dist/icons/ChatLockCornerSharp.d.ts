import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLockCornerSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerSharp: ForwardRefExoticComponent<ChatLockCornerSharpProps & RefAttributes<Svg>>;

export default ChatLockCornerSharp;
export { ChatLockCornerSharp };
