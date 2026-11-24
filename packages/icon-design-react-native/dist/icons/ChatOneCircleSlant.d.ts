import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOneCircleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleSlant: ForwardRefExoticComponent<ChatOneCircleSlantProps & RefAttributes<Svg>>;

export default ChatOneCircleSlant;
export { ChatOneCircleSlant };
