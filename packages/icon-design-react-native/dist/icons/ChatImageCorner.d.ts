import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatImageCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatImageCorner: ForwardRefExoticComponent<ChatImageCornerProps & RefAttributes<Svg>>;

export default ChatImageCorner;
export { ChatImageCorner };
