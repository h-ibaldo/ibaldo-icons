import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardCorner: ForwardRefExoticComponent<ChatForwardCornerProps & RefAttributes<Svg>>;

export default ChatForwardCorner;
export { ChatForwardCorner };
