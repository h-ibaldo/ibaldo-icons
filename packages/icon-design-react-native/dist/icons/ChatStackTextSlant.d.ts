import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTextSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTextSlant: ForwardRefExoticComponent<ChatStackTextSlantProps & RefAttributes<Svg>>;

export default ChatStackTextSlant;
export { ChatStackTextSlant };
