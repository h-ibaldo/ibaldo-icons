import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardSlant: ForwardRefExoticComponent<ChatForwardSlantProps & RefAttributes<Svg>>;

export default ChatForwardSlant;
export { ChatForwardSlant };
