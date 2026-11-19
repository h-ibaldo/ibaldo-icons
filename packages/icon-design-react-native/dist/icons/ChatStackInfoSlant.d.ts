import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackInfoSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoSlant: ForwardRefExoticComponent<ChatStackInfoSlantProps & RefAttributes<Svg>>;

export default ChatStackInfoSlant;
export { ChatStackInfoSlant };
