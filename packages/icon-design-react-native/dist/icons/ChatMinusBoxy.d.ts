import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusBoxy: ForwardRefExoticComponent<ChatMinusBoxyProps & RefAttributes<Svg>>;

export default ChatMinusBoxy;
export { ChatMinusBoxy };
