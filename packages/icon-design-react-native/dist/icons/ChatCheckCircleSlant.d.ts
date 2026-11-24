import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleSlant: ForwardRefExoticComponent<ChatCheckCircleSlantProps & RefAttributes<Svg>>;

export default ChatCheckCircleSlant;
export { ChatCheckCircleSlant };
