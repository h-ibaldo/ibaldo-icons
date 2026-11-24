import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckSlant: ForwardRefExoticComponent<ChatStackCheckSlantProps & RefAttributes<Svg>>;

export default ChatStackCheckSlant;
export { ChatStackCheckSlant };
