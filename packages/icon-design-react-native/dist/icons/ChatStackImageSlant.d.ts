import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackImageSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackImageSlant: ForwardRefExoticComponent<ChatStackImageSlantProps & RefAttributes<Svg>>;

export default ChatStackImageSlant;
export { ChatStackImageSlant };
