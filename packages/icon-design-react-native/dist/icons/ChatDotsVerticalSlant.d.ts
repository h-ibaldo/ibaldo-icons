import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalSlant: ForwardRefExoticComponent<ChatDotsVerticalSlantProps & RefAttributes<Svg>>;

export default ChatDotsVerticalSlant;
export { ChatDotsVerticalSlant };
