import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCirclePointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCirclePointed: ForwardRefExoticComponent<ChatCheckCirclePointedProps & RefAttributes<Svg>>;

export default ChatCheckCirclePointed;
export { ChatCheckCirclePointed };
