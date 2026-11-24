import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCorner: ForwardRefExoticComponent<ChatXCornerProps & RefAttributes<Svg>>;

export default ChatXCorner;
export { ChatXCorner };
