import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOffSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOffSlant: ForwardRefExoticComponent<ChatStackOffSlantProps & RefAttributes<Svg>>;

export default ChatStackOffSlant;
export { ChatStackOffSlant };
