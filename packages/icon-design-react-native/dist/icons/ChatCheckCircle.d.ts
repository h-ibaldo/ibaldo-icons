import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircle: ForwardRefExoticComponent<ChatCheckCircleProps & RefAttributes<Svg>>;

export default ChatCheckCircle;
export { ChatCheckCircle };
