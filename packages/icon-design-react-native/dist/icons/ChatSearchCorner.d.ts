import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSearchCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSearchCorner: ForwardRefExoticComponent<ChatSearchCornerProps & RefAttributes<Svg>>;

export default ChatSearchCorner;
export { ChatSearchCorner };
