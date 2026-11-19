import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartCornerSlant: ForwardRefExoticComponent<ChatStackHeartCornerSlantProps & RefAttributes<Svg>>;

export default ChatStackHeartCornerSlant;
export { ChatStackHeartCornerSlant };
