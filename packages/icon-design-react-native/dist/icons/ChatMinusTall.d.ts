import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusTall: ForwardRefExoticComponent<ChatMinusTallProps & RefAttributes<Svg>>;

export default ChatMinusTall;
export { ChatMinusTall };
