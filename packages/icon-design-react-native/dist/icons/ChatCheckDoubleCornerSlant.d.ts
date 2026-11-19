import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCornerSlant: ForwardRefExoticComponent<ChatCheckDoubleCornerSlantProps & RefAttributes<Svg>>;

export default ChatCheckDoubleCornerSlant;
export { ChatCheckDoubleCornerSlant };
