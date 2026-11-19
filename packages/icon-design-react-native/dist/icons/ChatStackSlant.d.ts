import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSlant: ForwardRefExoticComponent<ChatStackSlantProps & RefAttributes<Svg>>;

export default ChatStackSlant;
export { ChatStackSlant };
