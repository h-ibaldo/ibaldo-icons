import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartSlant: ForwardRefExoticComponent<ChatStackHeartSlantProps & RefAttributes<Svg>>;

export default ChatStackHeartSlant;
export { ChatStackHeartSlant };
