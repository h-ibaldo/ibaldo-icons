import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForward: ForwardRefExoticComponent<ChatForwardProps & RefAttributes<Svg>>;

export default ChatForward;
export { ChatForward };
