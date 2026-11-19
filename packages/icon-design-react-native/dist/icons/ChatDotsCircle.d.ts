import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircle: ForwardRefExoticComponent<ChatDotsCircleProps & RefAttributes<Svg>>;

export default ChatDotsCircle;
export { ChatDotsCircle };
