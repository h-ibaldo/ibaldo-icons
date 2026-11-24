import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOneCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOneCircle: ForwardRefExoticComponent<ChatOneCircleProps & RefAttributes<Svg>>;

export default ChatOneCircle;
export { ChatOneCircle };
