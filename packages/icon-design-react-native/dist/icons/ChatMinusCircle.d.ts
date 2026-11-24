import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircle: ForwardRefExoticComponent<ChatMinusCircleProps & RefAttributes<Svg>>;

export default ChatMinusCircle;
export { ChatMinusCircle };
