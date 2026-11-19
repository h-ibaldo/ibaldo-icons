import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsVerticalSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsVerticalSlant: ForwardRefExoticComponent<ChatStackDotsVerticalSlantProps & RefAttributes<Svg>>;

export default ChatStackDotsVerticalSlant;
export { ChatStackDotsVerticalSlant };
