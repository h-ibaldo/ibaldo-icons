import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCornerSlant: ForwardRefExoticComponent<ChatXCornerSlantProps & RefAttributes<Svg>>;

export default ChatXCornerSlant;
export { ChatXCornerSlant };
