import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerSlant: ForwardRefExoticComponent<ChatCheckCornerSlantProps & RefAttributes<Svg>>;

export default ChatCheckCornerSlant;
export { ChatCheckCornerSlant };
