import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextSlant: ForwardRefExoticComponent<ChatTextSlantProps & RefAttributes<Svg>>;

export default ChatTextSlant;
export { ChatTextSlant };
