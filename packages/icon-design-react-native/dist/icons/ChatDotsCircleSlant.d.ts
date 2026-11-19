import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCircleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleSlant: ForwardRefExoticComponent<ChatDotsCircleSlantProps & RefAttributes<Svg>>;

export default ChatDotsCircleSlant;
export { ChatDotsCircleSlant };
