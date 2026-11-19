import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDot: ForwardRefExoticComponent<ChatDotProps & RefAttributes<Svg>>;

export default ChatDot;
export { ChatDot };
