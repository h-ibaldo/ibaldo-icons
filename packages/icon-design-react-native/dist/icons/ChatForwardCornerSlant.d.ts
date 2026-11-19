import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardCornerSlant: ForwardRefExoticComponent<ChatForwardCornerSlantProps & RefAttributes<Svg>>;

export default ChatForwardCornerSlant;
export { ChatForwardCornerSlant };
