import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleBroken: ForwardRefExoticComponent<ChatCheckCircleBrokenProps & RefAttributes<Svg>>;

export default ChatCheckCircleBroken;
export { ChatCheckCircleBroken };
