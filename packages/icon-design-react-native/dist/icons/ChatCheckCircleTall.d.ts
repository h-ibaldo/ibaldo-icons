import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleTall: ForwardRefExoticComponent<ChatCheckCircleTallProps & RefAttributes<Svg>>;

export default ChatCheckCircleTall;
export { ChatCheckCircleTall };
